using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using comanda.classes;
using comanda.persistencia;
using FATEC;
using desperdicio.persistencia;



public partial class Paginas_Garçom_Comandas_Cadastrar : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        ComandaBD bd = new ComandaBD();
        DataSet ds = bd.SelectAll();


        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {

            grdComandas.DataSource = ds.Tables[0].DefaultView;
            grdComandas.DataBind();
            grdComandas.UseAccessibleHeader = true;
            grdComandas.HeaderRow.TableSection = TableRowSection.TableHeader;
        }
     


    }

    protected void grdComandas_RowCommand(object sender, GridViewCommandEventArgs e)
    {

        int codigo = 0;
        switch (e.CommandName)
        {
            case "Alterar":
                codigo = Convert.ToInt32(e.CommandArgument);
                Session["ID"] = codigo;
                Response.Redirect("Alterar.aspx");
                break;

            case "Cadastrar":
                codigo = Convert.ToInt32(e.CommandArgument);
                Session["ID"] = codigo;
                Response.Redirect("AdicionarItem.aspx");

                break;

        }


    }

}