using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using compras.classes;
using compras.persistencia;
using EspetinhoGoiania.Login.Persistencia;
using EspetinhoGoiania.Login.Classe;

public partial class Paginas_Administrador_MateriaPrima_Alterar : System.Web.UI.Page
{


    protected void Page_Load(object sender, EventArgs e)
    {

     
        if (!Page.IsPostBack)
        {
            ComprasBD bd = new ComprasBD();
            Compras compra = bd.Select(Convert.ToInt32(Session["ID"]));
            TextBox1.Text = compra.descricao.ToString();
            txtValor1.Text = compra.compravalor.ToString();


        }



    }

    protected void Button1_Click(object sender, EventArgs e)
    {

        ComprasBD bd = new ComprasBD();
        Compras compra = bd.Select(Convert.ToInt32(Session["ID"]));
        compra.compravalor = Convert.ToDouble(txtValor1.Text);
   


        if (bd.Update(compra))
        {
            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Alteração feita com Sucesso!', '', 'success');</script>");
            txtValor1.Focus();
        }
        else
        {

            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao Alterar', '' , 'error');</script>");


        }


    }
}