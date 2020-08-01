using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using EspetinhoGoiania.Login.Classe;
using EspetinhoGoiania.Login.Persistencia;
using produto.classes;
using produto.persistencia;
using FATEC;

public partial class Paginas_Administrador_Adm : System.Web.UI.Page
{

    //verifica as pessoas que são administradores no banco

    private bool IsAdministrador(char tipo)
    {

        bool retorno = false;

        if (tipo == 'A')
        {

            retorno = true;

        }

        return retorno;

    }

    protected void Page_Load(object sender, EventArgs e)
    {


            int codigo = Convert.ToInt32(Session["id"]);
            PessoaBD bd = new PessoaBD();
            Pessoa pessoa = bd.Select(codigo);

        if (!IsAdministrador(pessoa.Tipo))
        {

            Response.Redirect("../AcessoNegado/AcessoNegado.aspx");

        }
        else
        {

            lblTitulo.Text = "Bem vindo (Administrador): " + pessoa.Nome;

        }
    
    }

    protected void Button1_Click(object sender, EventArgs e)
    {

        bool verifica = false;

        //atributos do produto

        Produto produto = new Produto();
        produto.Nome = txtNome.Text;
        produto.Valor = Convert.ToDouble(txtValor.Text);
        produto.Quantidade = Convert.ToInt32(txtQuantidade.Text);
        ProdutoBD bd = new ProdutoBD();

        //busca no banco se existe algum produto igual para evitar repetições
        System.Data.IDbConnection objConexao;
        System.Data.IDbCommand objCommand;
        System.Data.IDataReader objDataReader;

        objConexao = Mapped.Connection();
        objCommand = Mapped.Command("SELECT nome_produto FROM tbl_produto", objConexao);
        objDataReader = objCommand.ExecuteReader();

        //estrutura while para varer e fazer a verificação no banco

        while (objDataReader.Read())
        {

            if (txtNome.Text == objDataReader["nome_produto"].ToString())
            {

                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Produto já existente', '', 'error');</script>");
                verifica = true;

                txtNome.Text = "";
                txtQuantidade.Text = "";
                txtValor.Text = "";

                txtNome.Focus();

                break;

            }
        }

        if (verifica == false)
        {

            if (bd.Insert(produto))
            {

                //exibe modal sucesso

                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Produto Cadastrado com Sucesso!', '', 'success');</script>");

                txtNome.Text = "";
                txtQuantidade.Text = "";
                txtValor.Text = "";
                txtNome.Focus();
            }
            else
            {

                //exibe modal error

                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao Cadastrar Produto', '' , 'error');</script>");

            }

        }

    }
}

