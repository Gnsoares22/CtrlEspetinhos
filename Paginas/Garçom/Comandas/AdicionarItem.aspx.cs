using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using produto.classes;
using produto.persistencia;
using System.Data;
using espeto.classes;
using espeto.persistencia;
using comanda.classes;
using comanda.persistencia;


public partial class Paginas_Garçom_Comandas_Adicionar_Item : System.Web.UI.Page
{

    //Carrega Produtos

    private void CarregaProdutos()
    {
        ProdutoBD bd = new ProdutoBD();
        DataSet ds = bd.SelectAll();
        ddlProduto.DataSource = ds.Tables[0].DefaultView;
        ddlProduto.DataTextField = "nome_produto";
        ddlProduto.DataValueField = "id_produto";
        ddlProduto.DataBind();
        ddlProduto.Items.Insert(0, "Selecione");
    }

    //Carrega Espeto

    private void CarregaEspetos()
    {
        EspetoBD bd = new EspetoBD();
        DataSet ds = bd.SelectAll();
        ddlEspeto.DataSource = ds.Tables[0].DefaultView;
        ddlEspeto.DataTextField = "esp_nome";
        ddlEspeto.DataValueField = "esp_id";
        ddlEspeto.DataBind();
        ddlEspeto.Items.Insert(0, "Selecione");
    }

    //carrega grid do espeto 
    private void CarregaGridEspeto()
    {
        ComandaBD bd = new ComandaBD();
        if (Session["ID"] != null)
        {
            int com_id = Convert.ToInt32(Session["ID"]);
            DataSet ds = bd.SelectAllComandaEspeto(com_id);
            grdpedidoesp.DataSource = ds.Tables[0].DefaultView;
            grdpedidoesp.DataBind();
        }
    }



    //Carrega grid Produto

    private void CarregaGridProduto()
    {
        ComandaBD bd = new ComandaBD();
        if (Session["ID"] != null)
        {
            int com_id = Convert.ToInt32(Session["ID"]);
            DataSet ds = bd.SelectAllComandaProduto(com_id);
            grdpedidopro.DataSource = ds.Tables[0].DefaultView;
            grdpedidopro.DataBind();
        }
    }


    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            CarregaProdutos();
            ddlProduto.Focus();

            CarregaEspetos();
            ddlEspeto.Focus();

            CarregaGridEspeto();
            CarregaGridProduto();
        }
    }



    protected void SalvarEspeto_Click(object sender, EventArgs e)
    {

        ComandaBD bd = new ComandaBD();

        if (Session["ID"] != null)
        {
            int com_id = Convert.ToInt32(Session["ID"]);
            int espqtd = Convert.ToInt32(txtQtd2.Text);

            int espeto = Convert.ToInt32(ddlEspeto.SelectedItem.Value);

            int retorno = bd.VincularPedidoEspeto(espeto, espqtd, com_id);


            switch (retorno)
            {
                case 0:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Espeto Vinculado com Sucesso!', '', 'success');</script>");
                    CarregaGridEspeto();
                    break;
                case 1:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Quantidade de espetos maior que o estoque!', '', 'error');</script>");
                    break;
                case 2:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Estoque para este espeto zerado!', '', 'error');</script>");
                    break;
                case 3:
                case -2:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao inserir espeto na comanda', '', 'error');</script>");
                    break;
            }

        }

        txtQtd2.Text = "";
    }




    //evento click button Produto

    protected void SalvarProduto_Click(object sender, EventArgs e)
    {

        ComandaBD bd = new ComandaBD();

        if (Session["ID"] != null)
        {
            int com_id = Convert.ToInt32(Session["ID"]);
            int produto_quantidade = Convert.ToInt32(txtQtd.Text);


            int produto = Convert.ToInt32(ddlProduto.SelectedItem.Value);

            int retorno = bd.VincularPedidoProduto(produto, produto_quantidade, com_id);
            switch (retorno)
            {
                case 0:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Produto Vinculado com Sucesso!', '', 'success');</script>");
                    CarregaGridProduto();
                    break;
                case 1:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Quantidade de produtos maior que o estoque!', '', 'error');</script>");
                    break;
                case 2:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Estoque para este produto zerado!', '', 'error');</script>");
                    break;
                case 3:
                case -2:

                    Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao inserir produto na comanda', '', 'success');</script>");
                    break;
            }

        }

        txtQtd.Text = "";
    }


}
