using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using desperdicio.persistencia;
using System.Data;

public partial class Paginas_Administrador_Desperdicíos_ListaDesperdicio : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        CarregaGrid();
      
    }


    private void CarregaGrid()
    {

        DesperdicioBD bd = new DesperdicioBD();
        DataSet ds = bd.SelectAll();

        //verifica a quantidade de espetos no dataset

        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {
            grdDesperdicio.DataSource = ds.Tables[0].DefaultView;
            grdDesperdicio.DataBind();
            grdDesperdicio.UseAccessibleHeader = true;
            grdDesperdicio.HeaderRow.TableSection = TableRowSection.TableHeader;

        }


    }


    protected void BtnFinalizardia_Click(object sender, EventArgs e)
    {

        Desperdicio desp;
        espeto.persistencia.EspetoBD espDB = new espeto.persistencia.EspetoBD();
        DataSet ds = espDB.SelectAll();
        foreach (DataRow dr in ds.Tables[0].Rows)
        {
            desp = new Desperdicio();
            desp.Espeto = new espeto.classes.Espetos();
            desp.Espeto.Codigo = Convert.ToInt32(dr["esp_id"]);
            desp.Quantidade = Convert.ToInt32(dr["esp_quantidade"]);
            desp.Data = DateTime.Now;
            desp.entradadia = Convert.ToInt32(dr["esp_entradadia"]);

            DesperdicioBD.Insert(desp);

            CarregaGrid();

            

        }
    }

}


