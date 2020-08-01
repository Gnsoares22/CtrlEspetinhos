using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using comanda.persistencia;
using comanda.classes;
using mesa.classes;
using mesa.persistencia;
using System.Data;

public partial class Paginas_Garçom_Comandas_Alterar : System.Web.UI.Page
{

  

    //carrega status da comanda


    public void Status(String status)
    {
  
        ddlStatus.Items.Insert(0, "Selecione");


        for (int i = 0; i < ddlStatus.Items.Count; i++)
        {
            if (ddlStatus.Items[i].Text == status.ToString())
            {
                ddlStatus.Items[i].Selected = true;

            }
        }

    }

  


    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            ComandaBD bd = new ComandaBD();
            Comanda comanda = bd.Select(Convert.ToInt32(Session["ID"]));

            Status(comanda.status);

        }

    }

    protected void btnSalvar_Click(object sender, EventArgs e)
    {

        ComandaBD bd = new ComandaBD();

        Comanda comanda = bd.Select(Convert.ToInt32(Session["ID"]));
   
        comanda.avaliacao = Convert.ToString(ddlAvaliacao.SelectedItem.Value);

        comanda.status = Convert.ToString(ddlStatus.Text);


        if (bd.Update(comanda))
        {
            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Comanda Alterada com Sucesso!', '', 'success');</script>");
            ddlStatus.Focus();
        }
        
    }
}