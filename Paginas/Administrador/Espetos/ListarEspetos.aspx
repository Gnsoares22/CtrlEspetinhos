<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ListarEspetos.aspx.cs" Inherits="Paginas_Administrador_Espetos_ListarEspetos" %>

<%@ Register Src="~/Cabecalho/CabecalhoADM.ascx" TagPrefix="uc1" TagName="CabecalhoADM" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title></title>

    <link href="../../../Content/bootstrap-select.min.css" rel="stylesheet" />
    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/DataTables/dataTables.bootstrap.js"></script>
    <link href="../../../font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../../../Scripts/DataTables/buttons.dataTables.min.css" rel="stylesheet" />
    <link href="../../../Scripts/DataTables/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/Conteudo.css" rel="stylesheet" />


</head>


<body>

    <uc1:CabecalhoADM runat="server" ID="CabecalhoADM" />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <form id="form1" runat="server">

        <div class="container" style="background-color: black; opacity: .9; border-radius: 10px; padding: 10px 10px 10px 10px">

            <h2 class="text-center" style="color: whitesmoke; font-family: 'Lobster', cursive;">Lista de Espetos </h2>

            <br />

            <br />

            <br />

            <div class="text-center col-xs-12">

                <asp:HyperLink ID="HyperLink1" CssClass="btn btn-primary"  NavigateUrl="~/Paginas/Administrador/Espetos/CadastrarEspeto.aspx" runat="server"> 
                    
                     <span class="glyphicon glyphicon-plus"></span>
                    
                    <strong> Cadastrar Espetos </strong>


                </asp:HyperLink>

            </div>

            <br />
            <br />
            <br />

            <div class="col-xs-12">


                <!-- gridview -->

                <div class="table-responsive">

                <asp:GridView ID="grdEspeto" runat="server" AutoGenerateColumns="False" CssClass="tabela table table-hover" BackColor="White" BorderColor="#999999" BorderStyle="Solid" BorderWidth="1px" CellPadding="3" ForeColor="Black" GridLines="Vertical" OnRowCommand="grdEspeto_RowCommand">
                    <AlternatingRowStyle BackColor="#CCCCCC" />
                    <Columns>
                        <asp:BoundField DataField="esp_nome" HeaderText="Espeto">
                            <HeaderStyle CssClass="text-center h4" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                        </asp:BoundField>
                        <asp:BoundField DataField="esp_valor" HeaderText="Valor" DataFormatString="{0:C}">
                            <HeaderStyle CssClass="text-center h4" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                        </asp:BoundField>
                        <asp:BoundField DataField="esp_quantidade" HeaderText="Quantidade">
                            <HeaderStyle CssClass="text-center h4" />
                            <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                        </asp:BoundField>

                        <asp:TemplateField HeaderText="Ação">

                            <ItemTemplate>
                                <asp:LinkButton ID="lbAlterar" CssClass="btn btn-primary" runat="server" CommandName="Darentrada"
                                    CommandArgument='<%# Bind("esp_id")%>'>

                            <span class="glyphicon glyphicon-edit"></span>

                            <strong>Dar Entrada </strong>

                                </asp:LinkButton>

                            </ItemTemplate>

                            <HeaderStyle CssClass="text-center h4" />
                            <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />

                        </asp:TemplateField>

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
        </div>


    </form>

    <br />

    <!-- scripts -->

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

    <script>


        $('.tabela').DataTable({
            paging: true,
            searching: true,
            ordering: true,
            dom: 'Bfrtip',
            stateSave: true,

            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fa fa-print"></i>',
                    titleAttr: 'Imprimir',
                    customize: function (win) {
                        $(win.document.body)
                            .css('font-size', '10pt')
                            .prepend(
                            '<h1 class="text-center"> Espetinho Goiânia </h1></br>'
                            );

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'copy',
                    text: '<i class="fa fa-copy"></i>',
                    titleAttr: 'Copiar',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fa fa-file-excel-o"></i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'pdf',
                    text: '<i class="fa fa-file-pdf-o"></i>',
                    titleAttr: 'PDF',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                'colvis'
            ],

            language: {
                sProcessing: "A processar...",
                sLengthMenu: "Mostrar _MENU_ registos",
                sZeroRecords: "Não foram encontrados resultados",
                sInfo: "<p> Mostrando de _START_ até _END_ de _TOTAL_ Espetos </p>",
                sInfoEmpty: "<p>Mostrando de 0 até 0 de 0 Espetos</p>",
                sInfoFiltered: "<p>(filtrado de _MAX_ registos no total)</p>",
                sInfoPostFix: "",
                sSearch: "<h6>Procurar<h6>",
                sUrl: "",
                oPaginate: {
                    sFirst: "Primeiro",
                    sPrevious: "<p>Anterior</p>",
                    sNext: "<p>Seguinte</p>",
                    sLast: "Último",
                },
                buttons: {
                    colvis: 'Selecione colunas',
                    copyTitle: 'Copiar',
                    copySuccess: { 1: "Copiado 1 linha para área de transferência", _: "Copiado %d linhas para área de transferência" }
                }
            }
        });

    </script>

</body>
</html>

