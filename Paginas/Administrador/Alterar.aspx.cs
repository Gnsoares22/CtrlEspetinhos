using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using produto.classes;
using produto.persistencia;
using System.Data;
using EspetinhoGoiania.Login.Classe;
using EspetinhoGoiania.Login.Persistencia;
using FATEC;

public partial class Paginas_Administrador_Alterar : System.Web.UI.Page
{



    protected void Page_Load(object sender, EventArgs e)
    {

        if (!Page.IsPostBack)
        {
            ProdutoBD bd = new ProdutoBD();
            Produto produto = bd.Select(Convert.ToInt32(Session["ID"]));
            txtNome1.Text = produto.Nome;
            txtValor1.Text = produto.Valor.ToString();
            

        }

    

    }

    protected void Button1_Click(object sender, EventArgs e)
    {

        ProdutoBD bd = new ProdutoBD();
        Produto produto = bd.Select(Convert.ToInt32(Session["ID"]));
        produto.Nome = txtNome1.Text;
        produto.Valor = Convert.ToDouble(txtValor1.Text);
        produto.Quantidade = produto.Quantidade + Convert.ToInt32(txtQuantidade1.Text);


        if (bd.Update(produto))
        {
            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Entrada feita com Sucesso!', '', 'success');</script>");
            txtNome1.Focus();
        }
        else
        {

            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao dar Entrada', '' , 'error');</script>");


        }


    }
}