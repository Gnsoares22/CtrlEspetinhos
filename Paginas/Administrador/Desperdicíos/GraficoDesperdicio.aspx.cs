using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using comanda.persistencia;
using System.Data;
using desperdicio.persistencia;

public partial class Paginas_Administrador_Comandas_Grafico : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {

        CarregaGrafico();

    }


    private void CarregaGrafico()
    {

        DataSet ds = DesperdicioBD.SelecionarQuantidadePorCategoria();


        int qtd = ds.Tables[0].Rows.Count;

        if (qtd > 0)
        {

            string serie = "";

            foreach (DataRow dr in ds.Tables[0].Rows)
            {

                serie += @" 

                     {

                    name: '" + dr["esp_nome"] + @"',

                    data: [" + dr["desperdicio"] + @"]

                },";

            }

            serie = serie.Substring(0, serie.Length - 1);

            lblScript.Text = @"<script>

            Highcharts.chart('container', {
                chart:
                {
                    type: 'column'
                },
                title:
                {
                    text: '<h1>Espetos com mais despedicios</h1>'
                },
                subtitle:
                {
                    text: 'Source: Agrupados por numero de desperdícios'
                },
                xAxis:
                {
                    crosshair: true
                },
                yAxis:
                {
                    min: 0,
                    title:
                    {
                        text: '<h2>Número de Desperdícios</h2>'
                    }
                },
                tooltip:
                {
                    headerFormat: '<span style=\""font-size:10px\>{point.key}</span><table>',
                    pointFormat: '<tr><td style=\""color:{series.color};padding:0\>{series.name}: </td>' +
                    '<td style=\""padding:0\><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions:
                {
                    column:
                    {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [" + serie + @"]
            });
    
                </script>";

        }

    }

}