using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using espeto.classes;
using espeto.persistencia;
using FATEC;

public partial class Paginas_Administrador_Espetos_Cadastrar : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btnSalvar_Click(object sender, EventArgs e)
    {

        bool verifica = false;

        //atributos do espeto

        Espetos produto = new Espetos();
        produto.Nome = txtNome.Text;
        produto.Valor = Convert.ToDouble(txtValor.Text);
        produto.Quantidade = Convert.ToInt32(txtQuantidade.Text);

        EspetoBD bd = new EspetoBD();


        //busca no banco se existe algum produto igual para evitar repetições
        System.Data.IDbConnection objConexao;
        System.Data.IDbCommand objCommand;
        System.Data.IDataReader objDataReader;

        objConexao = Mapped.Connection();
        objCommand = Mapped.Command("SELECT esp_nome FROM tbl_espetos", objConexao);
        objDataReader = objCommand.ExecuteReader();


        //estrutura while para varer e fazer a verificação no banco

        while (objDataReader.Read())
        {

            if (txtNome.Text == objDataReader["esp_nome"].ToString())
            {

                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Espeto já existente', '', 'error');</script>");
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
                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Espeto Cadastrado com Sucesso!', '', 'success');</script>");
                txtNome.Text = "";
                txtValor.Text = "";
                txtQuantidade.Text = "";
                txtNome.Focus();
            }
            else
            {

                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao Cadastrar Espeto', '' , 'error');</script>");

            }


        }

    }
}