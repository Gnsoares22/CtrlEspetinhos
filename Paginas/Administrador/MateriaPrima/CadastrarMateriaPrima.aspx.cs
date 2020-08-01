using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using compras.persistencia;
using compras.classes;
using FATEC;
using EspetinhoGoiania.Login.Classe;
using EspetinhoGoiania.Login.Persistencia;

public partial class Paginas_Administrador_MateriaPrima_Cadastrar : System.Web.UI.Page
{

    protected void btnSalvar_Click(object sender, EventArgs e)
    {


        //atributos do produto

        Compras compra = new Compras();
        compra.descricao = txtNome.Text;
        compra.compravalor = Convert.ToDouble(txtValor.Text);
        compra.compraqtd = Convert.ToInt32(txtQuantidade.Text);
        compra.Datac = Convert.ToString(txtDataC.Text);
        compra.Datav = Convert.ToString(txtDataV.Text);

        ComprasBD bd = new ComprasBD();

        if (bd.Insert(compra))
        {

            //exibe modal sucesso

            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Compra Registrada com Sucesso!', '', 'success');</script>");

            txtNome.Text = "";
            txtQuantidade.Text = "";
            txtValor.Text = "";
            txtDataV.Text = "";
            txtDataC.Text = "";
            txtNome.Focus();
        }
        else
        {

            //exibe modal error

            Page.ClientScript.RegisterStartupScript(this.GetType(), "script", "<script>swal('Erro ao Cadastrar Compra', '' , 'error');</script>");

        }

    }

}
