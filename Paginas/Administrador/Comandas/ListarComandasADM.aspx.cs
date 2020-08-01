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


    }

   
