using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using compras.persistencia;
using compras.classes;
using System.Data;
using EspetinhoGoiania.Login.Persistencia;
using EspetinhoGoiania.Login.Classe;

public partial class Paginas_Administrador_MateriaPrima_ListarMateriaPrima : System.Web.UI.Page
{

   


    protected void Page_Load(object sender, EventArgs e)
    {

   
        ComprasBD bd = new ComprasBD();
        DataSet ds = bd.SelectAll();


        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {
            grdCompras.DataSource = ds.Tables[0].DefaultView;
            grdCompras.DataBind();
            grdCompras.UseAccessibleHeader = true;
            grdCompras.HeaderRow.TableSection = TableRowSection.TableHeader;

        }

    }


    protected void grdCompras_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        

        int codigo = 0;

        switch (e.CommandName)
        {
            case "Darentrada":
                codigo = Convert.ToInt32(e.CommandArgument);
                Session["ID"] = codigo;
                Response.Redirect("../MateriaPrima/Alterar.aspx");

                break;

            default:
                break;
        }


    }

   
}
