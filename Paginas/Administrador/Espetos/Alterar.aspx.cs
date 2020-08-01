using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using espeto.classes;
using espeto.persistencia;
using System.Data;

public partial class Paginas_Administrador_Espetos_Darentrada : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!Page.IsPostBack)
        {
            EspetoBD bd = new EspetoBD();
            Espetos espeto = bd.Select(Convert.ToInt32(Session["ID"]));
            txtNome1.Text = espeto.Nome;
            txtValor1.Text = espeto.Valor.ToString();
        

        }

    }


    protected void Button1_Click(object sender, EventArgs e)
    {

        EspetoBD bd = new EspetoBD();
        Espetos espeto = bd.Select(Convert.ToInt32(Session["ID"]));
        espeto.Nome = txtNome1.Text;
        espeto.Valor = Convert.ToDouble(txtValor1.Text);
        espeto.Quantidade = espeto.Quantidade + Convert.ToInt32(txtQuantidade1.Text);
        espeto.Entradadia = espeto.Quantidade;

        if (bd.Update(espeto))
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
