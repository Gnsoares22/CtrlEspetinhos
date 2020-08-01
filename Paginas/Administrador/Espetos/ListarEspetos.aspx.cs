using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using espeto.classes;
using espeto.persistencia;
using System.Data;
using EspetinhoGoiania.Login.Classe;
using EspetinhoGoiania.Login.Persistencia;
using MySql.Data.MySqlClient;
using System.Configuration;
using FATEC;



public partial class Paginas_Administrador_Espetos_ListarEspetos : System.Web.UI.Page
{


    protected void Page_Load(object sender, EventArgs e)
    {

        EspetoBD bd = new EspetoBD();
        DataSet ds = bd.SelectAll();

        //verifica a quantidade de espetos no dataset

        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {
            grdEspeto.DataSource = ds.Tables[0].DefaultView;
            grdEspeto.DataBind();
            grdEspeto.UseAccessibleHeader = true;
            grdEspeto.HeaderRow.TableSection = TableRowSection.TableHeader;

        }

    }

        protected void grdEspeto_RowCommand(object sender, GridViewCommandEventArgs e)
        {

            int codigo = 0;
            switch (e.CommandName)
            {
                case "Darentrada":
                    codigo = Convert.ToInt32(e.CommandArgument);
                    Session["ID"] = codigo;
                    Response.Redirect("../Espetos/Alterar.aspx");
                    break;

                default:
                    break;
            }


        }
    }

   


