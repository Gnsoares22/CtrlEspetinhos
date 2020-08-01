using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using EspetinhoGoiania.Login.Classe;
using EspetinhoGoiania.Login.Persistencia;

public partial class Paginas_LogarSistema : System.Web.UI.Page
{

    //metodo para verificar a autenticação do garçom e do administrador

    private bool IsPreenchido(string str)
    {

        bool retorno = false;
        if (str != string.Empty)
        {

            retorno = true;

        }

        return retorno;

    }


    // metodo booleando para achar os administradores e garçons registrado no banco

    private bool UsuarioEncontrado(Pessoa pessoa)
    {

        bool retorno = false;

        if (pessoa != null)
        {
            retorno = true;

        }

        return retorno;

    }


    // evento click do botão 


    protected void BtnLogar_Click(object sender, EventArgs e)
    {

        string email = txtEmail.Text.Trim();
        string senha = txtSenha.Text.Trim();

        if (!IsPreenchido(email))
        {


            lblMensagem.Text = "Preencha o Email !!";
            txtEmail.Focus();
            return;

        }

        if (!IsPreenchido(senha))
        {

            lblMensagem.Text = "Preencha a Senha !!";
            txtSenha.Focus();
            return;


        }

        PessoaBD bd = new PessoaBD();
        Pessoa pessoa = new Pessoa();

        pessoa = bd.Autentica(email, senha);

        if (!UsuarioEncontrado(pessoa))
        {

            lblMensagem.Text = "Usuario não encontrado !!";
            txtEmail.Focus();
            return;
        }

        Session["ID"] = pessoa.Codigo;

        switch (pessoa.Tipo)
        {

            case 'A':

                Response.Redirect("Administrador/Adm.aspx");

                break;

            case 'G':


                Response.Redirect("Garçom/Garçom.aspx");

                break;

            default:

                break;

        }

    }
}
