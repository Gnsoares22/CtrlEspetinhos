using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using EspetinhoGoiania.Login.Classe;
using EspetinhoGoiania.Login.Persistencia;
using produto.classes;
using produto.persistencia;
using System.Data;
using FATEC;

public partial class Paginas_Garçom_Garçom : System.Web.UI.Page
{

    //metodo que verifica se quem vai logar é garçom

    private bool IsGarcom(int tipo)
    {
        bool retorno = false;

        if (tipo == 'G')
        {
            retorno = true;
        }
        return retorno;
    }

    private void Carrega()
    {
        ProdutoBD bd = new ProdutoBD();
        DataSet ds = bd.SelectAll();
        grdProduto.DataSource = ds.Tables[0].DefaultView;
        grdProduto.DataBind();

        int quantidade = ds.Tables[0].Rows.Count;
        if (quantidade > 0)
        {
            grdProduto.DataSource = ds.Tables[0].DefaultView;
            grdProduto.DataBind();
            grdProduto.UseAccessibleHeader = true;
            grdProduto.HeaderRow.TableSection = TableRowSection.TableHeader;

        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["ID"] != null)
        {
            int codigo = Convert.ToInt32(Session["ID"]);
            PessoaBD bd = new PessoaBD();
            Pessoa pessoa = bd.Select(codigo);

            if (!IsGarcom(pessoa.Tipo))
            {
                Response.Redirect("../AcessoNegado/AcessoNegado.aspx");
            }
            else
            {
                lblTitulo.Text = "Bem vindo Garçom/Churrasqueiro : " + pessoa.Nome;
            }

            Carrega();
        }
        else {
            Response.Redirect("../Paginas/LogarSistema.aspx");
        }
    }

}