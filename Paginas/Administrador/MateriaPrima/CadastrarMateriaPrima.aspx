<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CadastrarMateriaPrima.aspx.cs" Inherits="Paginas_Administrador_MateriaPrima_Cadastrar" %>

<%@ Register Src="~/Cabecalho/CabecalhoADM.ascx" TagPrefix="uc1" TagName="CabecalhoADM" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/sweetalert2.min.js.js"></script>
    <link href="../../../Content/sweetalert2.min.css.css" rel="stylesheet" />
    <script src="../../../Scripts/jquery.mask.min.js"></script>
    <link href="../../../EstiloPagina/estilo.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/estilo2.css" rel="stylesheet" />

    <script>

        $(document).ready(function(){

         $('.datav').mask('00/00/0000');
         $('.datac').mask('00/00/0000');


        });


    </script>


    <title></title>

</head>
<body>

    <uc1:CabecalhoADM runat="server" ID="CabecalhoADM" />

    <form id="form1" runat="server" autocomplete="off">

        <div class="container">

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div class="row">


                <div class="col-md-6">


                    <asp:HyperLink CssClass="btn btn-primary" ID="Button1" NavigateUrl="~/Paginas/Administrador/MateriaPrima/ListarMateriaPrima.aspx" runat="server">

                          <span class=" glyphicon glyphicon-list-alt"></span>

                         <strong> Lista de Materia Prima (Compras) </strong>


                    </asp:HyperLink>

                </div>

            </div>


            <br />
            <br />
            &nbsp;&nbsp;&nbsp;
           
                <p>&nbsp;</p>

            <div class="col-md-12" style="background-color: #000000; opacity: 0.8; padding-bottom:40px">

                <div class="col-md-12">


                        <h2 class="text-center">Cadastro de Materia Prima (Compras) </h2>
                        <p class="text-center">&nbsp;</p>
                        <p class="text-center">&nbsp;</p>


                    <div class="col-md-12">

                        <div class="form-group col-md-4">

                            <asp:Label ID="Label1" runat="server" CssClass="saud" Text="Descrição: "></asp:Label>

                            <asp:TextBox CssClass="form-control" placeholder="Digite a descrição da materia prima Comprada" ID="txtNome" runat="server"></asp:TextBox>

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtNome" ErrorMessage="Preencha a descrição da compra" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </div>

                        <div class="form-group col-md-4">

                            <asp:Label ID="Label2" CssClass="saud" runat="server" Text="Valor Compra (Total): "></asp:Label>
                            <asp:TextBox CssClass="form-control" ID="txtValor" placeholder="R$" runat="server"></asp:TextBox>

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtValor" ErrorMessage="Preencha o valor total da Materia Prima" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                            <asp:RangeValidator ID="RangeValidator1" runat="server" ControlToValidate="txtValor" ErrorMessage="Valor tem que ser maior que zero" ForeColor="Red" MaximumValue="9999" MinimumValue="1">*</asp:RangeValidator>

                      
                        </div>

        
                        <div class="form-group col-md-4">

                            <asp:Label ID="Label3" CssClass="saud" runat="server" Text="Quantidade (Kg): "></asp:Label>
                            <asp:TextBox CssClass="form-control" ID="txtQuantidade" placeholder="Digite a Quantidade do produto" runat="server"></asp:TextBox>

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtQuantidade" ErrorMessage="Preencha a quantidade de Materia Prima" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                            <asp:RangeValidator ID="RangeValidator2" runat="server" ControlToValidate="txtValor" ErrorMessage="Valor tem que ser maior que zero" ForeColor="Red" MaximumValue="9999" MinimumValue="1">*</asp:RangeValidator>


                        </div>


                        </div>
                   
                    <div class="col-md-12">

                        <div class="form-group col-md-4">

                            <asp:Label ID="Label4" CssClass="saud" runat="server" Text="Data da Compra:"></asp:Label>
                            <asp:TextBox CssClass="form-control datac" ID="txtDataC" placeholder="00/00/0000" runat="server"></asp:TextBox>

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="Preencha a Data da Compra" ForeColor="Red" SetFocusOnError="True" ControlToValidate="txtDataC">*</asp:RequiredFieldValidator>

          
                        </div>

           
                        <div class="form-group col-md-4">

                            <asp:Label ID="Label5" CssClass="saud" runat="server" Text="Data de Validade:"></asp:Label>
                            <asp:TextBox CssClass="form-control datav" ID="txtDataV" placeholder="00/00/0000" runat="server"></asp:TextBox>

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="txtDataV" ErrorMessage="Preencha a Data de Validade" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </div>

                        </div>

                        <div class="col-md-12">


                                <asp:Button CssClass="btn btn-success btn-lg" ID="btnSalvar" runat="server" Text="Cadastrar" OnClick="btnSalvar_Click" />

                        
                        </div>

                    </div>


                <br />


                <br />

                <br />

                <div class="col-md-12">

                    <br />
                    <asp:ValidationSummary CssClass="ac text-center" ID="ValidationSummary1" runat="server" BackColor="Red" ForeColor="White" />

                </div>

                <br />

            </div>

        </div>

    </form>
</body>
</html>
