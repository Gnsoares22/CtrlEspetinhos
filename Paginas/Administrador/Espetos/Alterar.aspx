<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Alterar.aspx.cs" Inherits="Paginas_Administrador_Espetos_Darentrada" %>

<%@ Register Src="~/Cabecalho/CabecalhoADM.ascx" TagPrefix="uc1" TagName="CabecalhoADM" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/sweetalert2.min.js.js"></script>
    <link href="../../../Content/sweetalert2.min.css.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/estilo.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/estilo.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/estilo.css" rel="stylesheet" />

    <title></title>
</head>
<body>

    <uc1:CabecalhoADM runat="server" ID="CabecalhoADM" />

    <form id="form1" runat="server">

        <div class="container">

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div class="row">


                <div class="col-md-6">


                    <asp:HyperLink CssClass="btn btn-danger" NavigateUrl="~/Paginas/Administrador/Espetos/ListarEspetos.aspx" ID="Button1" runat="server">

                          <span class=" glyphicon glyphicon-list-alt"></span>

                         <strong> Voltar para Lista de Espetos </strong>


                    </asp:HyperLink>

                    <br />

                </div>


            </div>



            <br />
            <br />
            <br />

            <div class="col-md-12" style="background-color: #000000; opacity: 0.8;">
       
                        <div class="col-md-12">


                            <h2 class="text-center">Dar entrada nos Espetos </h2>
                            <p class="text-center">&nbsp;</p>


                            <div class="form-group col-md-4">

                                <asp:Label ID="Label1" runat="server" CssClass="saud" Text="Nome: "></asp:Label>

                                <asp:TextBox CssClass="form-control" placeholder="Digite o nome do Produto" ID="txtNome1" runat="server"></asp:TextBox>

                            </div>

                            <div class="col-md-4">

                                <asp:Label ID="Label2" CssClass="saud" runat="server" Text="Valor (unitário): "></asp:Label>
                                <asp:TextBox CssClass="form-control" ID="txtValor1" placeholder="Valor do Produto" runat="server"></asp:TextBox>

                                <br />

                            </div>

                            <div class="form-group col-md-4">

                                <asp:Label ID="Label3" CssClass="saud" runat="server" Text="Quantidade: "></asp:Label>
                                <asp:TextBox TextMode="Number" CssClass="form-control" ID="txtQuantidade1" placeholder="Digite a Quantidade da entrada" runat="server"></asp:TextBox>

                                <asp:RangeValidator ID="RangeValidator1" runat="server" ControlToValidate="txtQuantidade1" ErrorMessage="Valor da entrada deve ser maior que zero" ForeColor="#FF3300" MaximumValue="9999" MinimumValue="1" SetFocusOnError="True" Type="Integer">*</asp:RangeValidator>

                                <br />

                            </div>



                        </div>


                        <div class="col-md-12" style="padding-bottom: 45px;">

                            <div class="col-md-6">

                                <asp:Button CssClass="btn btn-success" ID="btnSalvar" runat="server" Text="Alterar" OnClick="Button1_Click" />

                            </div>


                        </div>


                    </div>

  
            <br />

        </div>


    </form>
</body>
</html>
