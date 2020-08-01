using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using produto.classes;
using produto.persistencia;
using System.Data;
using EspetinhoGoiania.Login.Persistencia;
using EspetinhoGoiania.Login.Classe;
using FATEC;


public partial class Paginas_Administrador_ListarProdutos : System.Web.UI.Page
{



    protected void Page_Load(object sender, EventArgs e)
    {

        ProdutoBD bd = new ProdutoBD();
        DataSet ds = bd.SelectAll();

        //verifica a quantidade de produtos no dataset

        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {
            grdProdutos.DataSource = ds.Tables[0].DefaultView;
            grdProdutos.DataBind();
            grdProdutos.HeaderRow.TableSection = TableRowSection.TableHeader;
        }
      
       
    }

    protected void grdProdutos_RowCommand(object sender, GridViewCommandEventArgs e)
    {

        int codigo = 0;
        switch (e.CommandName)
        {
            case "Darentrada":
                codigo = Convert.ToInt32(e.CommandArgument);
                Session["ID"] = codigo;
                Response.Redirect("../Administrador/Alterar.aspx");
                break;

            default:
                break;
        }

    }

}