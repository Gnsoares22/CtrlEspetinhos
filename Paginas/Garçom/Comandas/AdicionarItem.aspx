<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AdicionarItem.aspx.cs" Inherits="Paginas_Garçom_Comandas_Adicionar_Item" %>

<%@ Register Src="~/Cabecalho/CabecalhoGarcom.ascx" TagPrefix="uc1" TagName="CabecalhoGarcom" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title></title>

    <link href="../../../Content/bootstrap-select.min.css" rel="stylesheet" />
    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/DataTables/dataTables.bootstrap.js"></script>
    <link href="../../../font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../../../Content/sweetalert2.min.css.css" rel="stylesheet" />
    <script src="../../../Scripts/sweetalert2.min.js.js"></script>
    <link href="../../../Scripts/DataTables/buttons.dataTables.min.css" rel="stylesheet" />
    <link href="../../../Scripts/DataTables/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/Conteudo.css" rel="stylesheet" />


</head>


<body>

    <uc1:CabecalhoGarcom runat="server" ID="CabecalhoGarcom" />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="container">


        <asp:HyperLink CssClass="btn btn-danger" NavigateUrl="~/Paginas/Garçom/Comandas/ListarComandas.aspx" ID="link" runat="server">

                          <span class=" glyphicon glyphicon-list-alt"></span>

                         <strong> Lista de Comandas </strong>


        </asp:HyperLink>

    </div>

    <br />
    <br />
    <br />


    <form id="form1" runat="server">

        <div class="container" style="background-color: black; opacity: .9; border-radius: 10px; padding: 10px 10px 10px 10px">

            <h2 class="text-center" style="color: whitesmoke; font-family: 'Lobster', cursive;">Itens da Comanda</h2>

            <br />

            <div class="col-lg-12">

                <br />
                <br />

                <div class="col-lg-6 text-center">

                    <figure>
                        <img width="170" height="130" style="cursor: pointer" data-toggle="modal" data-target="#exampleModal" title="Adicionar Espeto" runat="server" src="~/Imagens/espeto.png" class="img-thumbnail" />
                        <br />
                        <figcaption style="color: whitesmoke; font-family: Lobster,cursive; font-size: 28px">Espeto </figcaption>

                    </figure>

                    <br />
                    <br />

                </div>

                <br />

                <div class="col-lg-6 text-center">

                    <figure>
                        <img width="170" style="cursor: pointer" data-toggle="modal" data-target="#Produto" title="Adicionar Produtos" runat="server" src="~/Imagens/Bebidas.png" class="img-thumbnail" />
                        <br />
                        <figcaption style="color: whitesmoke; font-family: Lobster,cursive; font-size: 28px">Produto</figcaption>
                    </figure>

                    <br />
                    <br />

                </div>

                <br />
                <br />
                <br />
                <br />

                <!-- gridview Pedido Espeto -->

                <asp:GridView ID="grdpedidoesp" CssClass="tabela table table-striped table-bordered danger" AutoGenerateColumns="False" runat="server" BackColor="White" BorderColor="#999999" BorderStyle="Solid" BorderWidth="1px" CellPadding="3" ForeColor="Black" GridLines="Vertical">
                    <AlternatingRowStyle BackColor="#CCCCCC" />
                    <FooterStyle BackColor="#CCCCCC" />
                    <HeaderStyle BackColor="Black" Font-Bold="True" ForeColor="White" />
                    <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
                    <SelectedRowStyle BackColor="#000099" Font-Bold="True" ForeColor="White" />
                    <SortedAscendingCellStyle BackColor="#F1F1F1" />
                    <SortedAscendingHeaderStyle BackColor="#808080" />
                    <SortedDescendingCellStyle BackColor="#CAC9C9" />
                    <SortedDescendingHeaderStyle BackColor="#383838" />
                    <Columns>
                        <asp:BoundField DataField="esp_nome" HeaderText="Espeto">
                            <HeaderStyle CssClass="h4 text-center" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" VerticalAlign="Middle" />
                        </asp:BoundField>
                        <asp:BoundField DataField="pe_qtd" HeaderText="Quantidade">
                            <HeaderStyle CssClass="h4 text-center" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" VerticalAlign="Middle" />
                        </asp:BoundField>
                        <asp:BoundField DataField="pe_subtotal" HeaderText="Sub-Total (R$)" DataFormatString="{0:c}">
                            <HeaderStyle CssClass="h4 text-center" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" VerticalAlign="Middle" />
                        </asp:BoundField>
                    </Columns>
                </asp:GridView>


                <br />
                <br />

                <!-- gridview Pedido Produto -->

                <asp:GridView ID="grdpedidopro" CssClass="tabela table table-striped table-bordered danger" runat="server" BackColor="White" BorderColor="#999999" BorderStyle="Solid" BorderWidth="1px" CellPadding="3" ForeColor="Black" GridLines="Vertical" AutoGenerateColumns="False">
                    <AlternatingRowStyle BackColor="#CCCCCC" />
                    <Columns>
                        <asp:BoundField DataField="nome_produto" HeaderText="Produto">
                            <HeaderStyle CssClass="h4 text-center" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" VerticalAlign="Middle" />
                        </asp:BoundField>
                        <asp:BoundField DataField="pp_quantidade" HeaderText="Quantidade">
                            <HeaderStyle CssClass="h4 text-center" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" VerticalAlign="Middle" />
                        </asp:BoundField>
                        <asp:BoundField DataField="pp_subtotal" HeaderText="Sub - Total (R$)" DataFormatString="{0:c}">
                            <HeaderStyle CssClass="h4 text-center" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" VerticalAlign="Middle" />
                        </asp:BoundField>
                    </Columns>
                    <FooterStyle BackColor="#CCCCCC" />
                    <HeaderStyle BackColor="Black" Font-Bold="True" ForeColor="White" />
                    <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
                    <SelectedRowStyle BackColor="#000099" Font-Bold="True" ForeColor="White" />
                    <SortedAscendingCellStyle BackColor="#F1F1F1" />
                    <SortedAscendingHeaderStyle BackColor="#808080" />
                    <SortedDescendingCellStyle BackColor="#CAC9C9" />
                    <SortedDescendingHeaderStyle BackColor="#383838" />
                </asp:GridView>


            </div>

        </div>


        <!-- 2 Modais para os pedidos -->

        <!-- Modal para cadastrar Espeto -->

        <div class="modal fade" id="exampleModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title text-center">Pedido Espeto</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label>Espeto</label>

                        <asp:DropDownList CssClass="form-control" ID="ddlEspeto" runat="server"></asp:DropDownList>

                        <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="Selecione um Espeto" ControlToValidate="ddlEspeto" Operator="NotEqual" Text="*" ForeColor="Red" ValueToCompare="Selecione" ValidationGroup="espeto"></asp:CompareValidator>

                        <br />
                        <br />

                        <label>Quantidade </label>

                        <asp:TextBox CssClass="form-control" TextMode="Number" placeholder="Quantidade de Espeto solicitado" ID="txtQtd2" runat="server"></asp:TextBox>

                        <asp:RangeValidator ID="RangeValidator1" ValidationGroup="espeto" runat="server" ForeColor="Red" MaximumValue="9999" MinimumValue="1" ErrorMessage="RangeValidator" ControlToValidate="txtQtd2" Type="Integer">*</asp:RangeValidator>

                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtQtd2" ErrorMessage="Preencha a quantidade de espetos" ValidationGroup="espeto" Text="*" ForeColor="Red"></asp:RequiredFieldValidator>

                    </div>
                    <div class="modal-footer">

                        <asp:Button ID="SalvarEspeto" CssClass="btn btn-success" ValidationGroup="espeto" OnClick="SalvarEspeto_Click" runat="server" Text="Adicionar" />
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>

                    </div>
                </div>
            </div>
        </div>




        <!-- Modal para cadastrar Produtos -->

        <div class="modal fade" id="Produto">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title text-center">Pedido Produto</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label>Produto</label>

                        <asp:DropDownList CssClass="form-control" ID="ddlProduto" runat="server"></asp:DropDownList>

                        <asp:CompareValidator ID="CompareValidator2" runat="server" ForeColor="Red" ValidationGroup="produto" Operator="NotEqual" ValueToCompare="Selecione" ErrorMessage="Selecione um Produto" ControlToValidate="ddlProduto" Text="*" SetFocusOnError="True"></asp:CompareValidator>

                        <br />
                        <br />

                        <label>Quantidade </label>

                        <asp:TextBox CssClass="form-control" TextMode="Number" placeholder="Quantidade de Produto solicitado" ID="txtQtd" runat="server"></asp:TextBox>

                        <asp:RangeValidator ID="RangeValidator2" ValidationGroup="produto" runat="server" ForeColor="Red" MaximumValue="9999" MinimumValue="1" ErrorMessage="RangeValidator" ControlToValidate="txtQtd" Type="Integer">*</asp:RangeValidator>

                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtQtd" ErrorMessage="Preencha a quantidade de produtos" ValidationGroup="produto" Text="*" ForeColor="Red"></asp:RequiredFieldValidator>


                    </div>
                    <div class="modal-footer">
                        <asp:Button ID="Button2" runat="server" ValidationGroup="produto" class="btn btn-success" OnClick="SalvarProduto_Click" Text="Adicionar" />
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>

        <br />
        <br />



    </form>

    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/DataTables/jquery.dataTables.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/dataTables.buttons.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.flash.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/jszip.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/pdfmake.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/vfs_fonts.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.html5.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.print.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.colVis.min.js"></script>
    <script src="../../../Scripts/bootstrap-select.min.js"></script>

</body>

<script type="text/javascript">

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


</script>


</html>
