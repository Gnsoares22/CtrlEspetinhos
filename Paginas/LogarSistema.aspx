<%@ Page Language="C#" EnableEventValidation="false" AutoEventWireup="true" CodeFile="LogarSistema.aspx.cs" Inherits="Paginas_LogarSistema" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link href="../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../Scripts/bootstrap.min.js"></script>
    <link href="../EstiloPagina/Login.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />


</head>
<body>
    <form id="form1" runat="server">

        <div class="container">

            <h1 class="text-center titulo">Ctrl Espetinhos Sistema de Gerenciamento </h1>

            <div class="container">

                <br />
                <br />
                <br />
                <br />

                <div class="card card-container">
                    <h2 class='login_title text-center'>Login</h2>
                    <hr>

                    <form class="form-signin">

                        <span id="reauth-email" class="reauth-email"></span>
                        <p class="input-group">Email</p>
                        <asp:TextBox ID="txtEmail" placeholder="Email" data-placement="bottom" data-toggle="tooltip" title="Digite seu Email" class="login_box form-control" runat="server"></asp:TextBox>
                        <p class="input-group">
                            <br />
                            Senha
                        </p>
                        <asp:TextBox ID="txtSenha" TextMode="Password" placeholder="Senha" data-placement="bottom" data-toggle="tooltip" title="Digite sua Senha" class="login_box form-control" runat="server"></asp:TextBox>

                        <br />

                        <br />
                        <br />

                        <asp:Button ID="BtnLogar" CssClass="btn btn-primary btn-lg b form-control" runat="server" Text="Logar" OnClick="BtnLogar_Click" />
                        <br />

                        <div class="text-center tit">
                            <br />
                            <asp:Label ID="lblMensagem" CssClass="text-center tit" runat="server"></asp:Label>
                        </div>
                    </form>

                    <br />

                </div>
            </div>

         
            <br />

        </div>

        <script type="text/javascript">

            $(document).ready(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });


        </script>


    </form>
</body>
</html>




