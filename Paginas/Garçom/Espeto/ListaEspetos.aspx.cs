using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using espeto.classes;
using espeto.persistencia;
using System.Data;

public partial class Paginas_Garçom_Espeto_ListaEspetos : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        Carrega();

    }

    private void Carrega()
    {
        EspetoBD bd = new EspetoBD();
        DataSet ds = bd.SelectAll();
        grdEspeto.DataSource = ds.Tables[0].DefaultView;
        grdEspeto.DataBind();

        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {
            grdEspeto.DataSource = ds.Tables[0].DefaultView;
            grdEspeto.DataBind();
            grdEspeto.UseAccessibleHeader = true;
            grdEspeto.HeaderRow.TableSection = TableRowSection.TableHeader;

        }
    }

}