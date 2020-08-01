using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using mesa.persistencia;
using mesa.classes;
using System.Data;
using comanda.classes;
using comanda.persistencia;


public partial class Paginas_Garçom_Comandas_Cadastrar : System.Web.UI.Page
{

    private void CarregaMesas()
    {
        MesaBD bd = new MesaBD();
        DataSet ds = bd.SelectAll();
        ddlMesas.DataSource = ds.Tables[0].DefaultView;
        ddlMesas.DataTextField = "mesas_descricao";
        ddlMesas.DataValueField = "mesas_id";
        ddlMesas.DataBind();
        ddlMesas.Items.Insert(0, "Selecione");
    }


    protected void Page_Load(object sender, EventArgs e)
    {

        if (!Page.IsPostBack)
        {
            CarregaMesas();
            ddlMesas.Focus();
        }

    }

    private void LimparCampos()
    {

        //remove seleção das ddls

        for (int i = 0; i < ddlMesas.Items.Count; i++)
        {
            ddlMesas.Items[i].Selected = false;
        }

        //coloca o "Selecione" selecionado
        ddlMesas.Items[0].Selected = true;

    }

    protected void btnSalvar_Click(object sender, EventArgs e)
    {

        MesaBD mesabd = new MesaBD();

        Mesa mesa = mesabd.Select(Convert.ToInt32(ddlMesas.SelectedItem.Value));

        Comanda comanda = new Comanda();


        comanda.status = Convert.ToString(ddlStatus.SelectedItem.Value);
        comanda.mesa = mesa;

        ComandaBD combd = new ComandaBD();

        int retorno = combd.Insert(comanda);

        switch (retorno)
        {
            case 0:
                LimparCampos();
                ddlMesas.Focus();
                Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Comanda Cadastrada com Sucesso!', '', 'success');</script>");
                break;

            default:
                break;
        }


    }
}