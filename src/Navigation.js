import React, { Component } from 'react';

import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, Route, BrowserRouter as Router, Switch, BrowserRouter, useHistory} from 'react-router-dom';
import { Employee } from './Components/Employee';


import { MPOAS } from './Components/MonthwisePurOrdAmtSummary';
import { MPOQS } from './Components/MonthwisePurOrdQtySummary';
import { Partywise } from './Components/PartywisePurOrdAmtSummary';
import { Itemwise } from './Components/ItemwisePurOrdQtySummary';
import { ItemwiseBillsub } from './Components/ItemwisePurQtyWgtAmtBillsub';
import { MPAB } from './Components/MonthwisePurAmtBillsub';
import { PartywiseBillsub } from './Components/PartywisePurAmtBillsub';


import { MSAB } from './SalesComponent/MonthwiseSalesAmt';
import { MSAQWB } from './SalesComponent/MonthwiseSalesAmtQtyWgt';
import { PartywiseSalesBillentry } from "./SalesComponent/PartywiseSalesAmt";
import { PartywiseSalesQtyBillentry } from "./SalesComponent/PartywiseSalesQtyWeight";
import { ItemwiseSalesQtyWgt } from "./SalesComponent/ItemwiseSalesQtyWgt";
import { DailyItemwiseSalesQtyWgt } from "./SalesComponent/DailySalesDispatchItemwise";
import { MRAWB } from './SalesComponent/MonthlyRateAmtWgt';


import { MGIAS } from './MaterialManComponent/MonthwiseGoodsInwardAmtSummary';
import { MGIQWS } from './MaterialManComponent/MonthwiseGoodsInwardQtyWgtSummary';
import { PartywiseGIAS } from './MaterialManComponent/PartywiseGoodsInwardAmtSummary';
import { ItemwiseGIQWS } from './MaterialManComponent/ItemwiseGoodsInwardQtyWgtSummary';
import { ItemwiseIssueQWS } from './MaterialManComponent/ItemwiseIssueQtyWgtSummary';
import { Processingissue } from './MaterialManComponent/ProcessingIssue';
import Processingreceived from './MaterialManComponent/ProcessingReeived';
import ItemwiseStock from './MaterialManComponent/ItemwiseStock';



import MonthwiseMouldingQty from './ProductionComponent/MonthwiseMouldingQtySummary';
import { DropDownMenu } from 'material-ui';
import ItemwiseMouldingQty from './ProductionComponent/ItemwiseMouldingQtySummary';
import ContractorwiseMouldingQty from './ProductionComponent/ContractorwiseMouldingQtySummary';
import MonthwisePouringQtyWgt from './ProductionComponent/MonthwisePouringQtyWgtSummary';
import ItemwisePouringingQtyWgt from './ProductionComponent/ItemwisePouringQtyWgtSummary';
import ContractorwisePouringQtyWgt from './ProductionComponent/ContractorWisePouringQtyWgtSummary';
import MonthwiseConsumptionQtyWgt from './ProductionComponent/MonthwiseConsumptionQtyWgtSummary';
import ItemwiseConsumptionQtyWgt from './ProductionComponent/ItemwiseConsumptionQtyWgtSummary';
import ContractorwiseConsumptionQtyWgt from './ProductionComponent/ContractorwiseConsumptionQtyWgtSummary';
import MonthwiseProductionQtyWgt from './ProductionComponent/MonthwiseProductionQtyWgtSummary';
import ItemwiseProductionQtyWgt from './ProductionComponent/ItemwiseProductionQtyWgtSummary';
import ContractorwiseProductionQtyWgt from './ProductionComponent/ContractorwiseProductionQtyWgtSummary';
import MonthwiseFirstRejectionQtyWgt from './ProductionComponent/MonthwiseFirstRejectionQtyWgtSummary';
import ItemwiseFirstRejectionQtyWgt from './ProductionComponent/ItemwiseFirstRejectionQtyWgtSummary';
import ContractorwiseFirstRejectionQtyWgt from './ProductionComponent/ContractorwiseFirstRejectionQtyWgtSummary';
import MonthwiseIINDRejectionQtyWgt from './ProductionComponent/MonthwiseIINDRejQtyWgtSummary';
import ItemwiseIINDRejectionQtyWgt from './ProductionComponent/ItemwiseIINDRejQtyWgtSummary';
import PartywiseIINDRejQtyWgt from './ProductionComponent/PartywiseIINDRejQtyWgtSummary';
import MonthwisePartyRejectionQtyWgt from './ProductionComponent/MonthwisePartyRejQtyWgt';
import ItemwisePartyRejectionQtyWgt from './ProductionComponent/ItemwisePartyRejQtyWgtSummary';
import PartywisePartyRejQtyWgt from './ProductionComponent/PartywisePartyRejQtyWgtSummary';
import MonthwisePartyRejectionAnalysisQtyWgt from './ProductionComponent/MonthwisePartyRejAnalysisQtyWgtSummary';
import ItemwisePartyRejectionAnalysisQtyWgt from './ProductionComponent/ItemwisePartyRejAnalysisQtyWgtSummary';
import PartywisePartyRejAnalysisQtyWgt from './ProductionComponent/PartywisePartyRejAnalysisQtyWgtSummary';
import ItemwiseMouldingPouring from './ProductionComponent/ItemwiseMouldVsPour';
import ItemwiseProductionRejecction from './ProductionComponent/ItemwiseProdVsRej';


import Tradingexpenses from './AccountsComponent/TradingExpenses';
import Tradingincomes from './AccountsComponent/TradingIncomes';
import PLexpenses from './AccountsComponent/PLExpenses';
import PLincomes from './AccountsComponent/PLIncomes';
import DebList from './AccountsComponent/DebtorsList';
import CreList from './AccountsComponent/CreditorsList';
import FixAssets from './AccountsComponent/FixedAssets';
import CurAssets from './AccountsComponent/CurrentAssets';
import Entriestran from './AccountsComponent/EntriesTransactions';
import InventoryBillSub from './AccountsComponent/InventoryBillSub';
import InventoryGRN from './AccountsComponent/InventoryGRN';




export class NavMenu extends Component {
    
    
//console.warn(user)

 logout() {
    
    localStorage.clear();
    var a = localStorage.getItem('myData');
    console.warn(a)
     window.location.href = '/';
    //  this.props.history.push('/login')

}
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        //Production sub menus
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
        this.toggle7 = this.toggle7.bind(this);
        this.toggle8 = this.toggle8.bind(this);
        this.toggle9 = this.toggle9.bind(this);
        this.toggle10 = this.toggle10.bind(this);
        this.toggle11= this.toggle11.bind(this);
        this.toggle12 = this.toggle12.bind(this);
        this.state = {
            collapsed: true
        };
    }
    

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggle1() {
        this.setState({
            dropdownOpen1: !this.state.dropdownOpen1
        });
    }

    toggle2() {
        this.setState({
            dropdownOpen2: !this.state.dropdownOpen2
        });
    }

    toggle3() {
        this.setState({
            dropdownOpen3: !this.state.dropdownOpen3
        });
    }

    toggle4() {
        this.setState({
            dropdownOpen4: !this.state.dropdownOpen4
        });
    }
    //Production sub menus
    toggle5() {
        this.setState({
            dropdownOpen5: !this.state.dropdownOpen5
        });
    }
    toggle6() {
        this.setState({
            dropdownOpen6: !this.state.dropdownOpen6
        });
    }
    toggle7() {
        this.setState({
            dropdownOpen7: !this.state.dropdownOpen7
        });
    }
    toggle8() {
        this.setState({
            dropdownOpen8: !this.state.dropdownOpen8
        });
    }
    toggle9() {
        this.setState({
            dropdownOpen9: !this.state.dropdownOpen9
        });
    }
    toggle10() {
        this.setState({
            dropdownOpen10: !this.state.dropdownOpen10
        });
    }
    toggle11() {
        this.setState({
            dropdownOpen11: !this.state.dropdownOpen11
        });
    }
    toggle12() {
        this.setState({
            dropdownOpen12: !this.state.dropdownOpen12
        });
    }

    render() {
        return (
          <Router>
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Ridhi Casting Pvt Ltd.</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle nav caret>
                                            <span className="mr-2">Purchase</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                                <DropdownItem tag={Link}  to="/fetch-purOrdEntry" >Purchase Order Entry</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-MonPurOrdAmtSum" >Monthwise Purchase Order - Amount Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-MonPurOrdQtySum" >Monthwise Purchase Order - Quantity/Weight Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-PartyPurOrdAmtSum" >PartyWise Purchase Order - Amount Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ItemPurOrdQtySum" >Itemwise Purchase Order - Quantity/Weight Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-MonPurAmtBill" >Monthwise Purchase Amount</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-PartyPurAmtBill" >Partywise Purchase Amount</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ItemwiseBillsub" >Itemwise Purchase Quantity/Weight/Amount</DropdownItem>



                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>

                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                                        <DropdownToggle nav caret>
                                            <span className="mr-2">Manufacturing and Processes</span>
                                        </DropdownToggle>
                                            <DropdownMenu>
                                               
                                                <Dropdown isOpen={this.state.dropdownOpen5} toggle={this.toggle5} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Moulding</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonMouldQty" >Monthwise Moulding Quantity Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwiseMouldQty" >Itemwise Moulding Quantity Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ContracorwiseMouldQty" >Contractorwise Moulding Quantity Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen6} toggle={this.toggle6} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Pouring</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonPourQtyWgt" >Monthwise Pouring Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwisePourQtyWgt" >Itemwise Moulding Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ContracorwisePourQtyWgt" >Contractorwise Moulding Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen7} toggle={this.toggle7} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Consumption</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonConQtyWgt" >Monthwise Consumption Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwiseConQtyWgt" >Itemwise Consumption Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ContracorwiseConQtyWgt" >Contractorwise Consumption Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen8} toggle={this.toggle8} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Production</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonProdQtyWgt" >Monthwise Production Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwiseProdQtyWgt" >Itemwise Production Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ContracorwiseProdQtyWgt" >Contractorwise Production Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen9} toggle={this.toggle9} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Rejection</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonFREJQtyWgt" >Monthwise First Rejection Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwiseFREJQtyWgt" >Itemwise First Rejection Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ContracorwiseFREJQtyWgt" >Contractorwise First Rejection Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen10} toggle={this.toggle10} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">IIND Rejection</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonIINDRejQtyWgt" >Monthwise IIND Rejection Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwiseIINDRejQtyWgt" >Itemwise IIND Rejection Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-PartywiseIINDRejQtyWgt" >Partywise IIND Rejection Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen11} toggle={this.toggle11} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Party Rejection</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonPartyRejQtyWgt" >Monthwise Party Rejection Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwisePartyRejQtyWgt" >Itemwise Party Rejection Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-PartywisePartyRejQtyWgt" >Partywise Party Rejection Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                <Dropdown isOpen={this.state.dropdownOpen12} toggle={this.toggle12} direction='right'>
                                                    <DropdownToggle nav caret>
                                                        <span className="mr-2">Party Rejection Analysis</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag={Link} to="/fetch-MonPartyRejAnalysisQtyWgt" >Monthwise Party Rejection Analysis Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-ItemwisePartyRejAnalysisQtyWgt" >Itemwise Party Rejection Analysis Quantity/Weight Summary</DropdownItem>
                                                        <DropdownItem tag={Link} to="/fetch-PartywisePartyRejAnalysisQtyWgt" >Partywise Party Rejection Analysis Quantity/Weight Summary</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                                


                                                <DropdownItem tag={Link} to="/fetch-ItemwiseMouldPourQty" >Itemwise Moulding VS Pouring Quantity Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ItemwiseProdRejQty" >Itemwise Production VS Rejection Quantity Summary</DropdownItem>
                                               
                                             
                                                    
                                            </DropdownMenu>
                                    </Dropdown>
                                </NavItem>


                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                                        <DropdownToggle nav caret>
                                            <span className="mr-2">Material Management</span>
                                        </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem tag={Link} to="/fetch-MonGIAmtSum" >Monthwise Goods Inward-Amount Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-MonGIQtyWgtSum" >Monthwise Goods Inward-Quantity/Weight Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-PartywiseGIAmtSum" >Partywise Goods Inward-Amount Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ItemwiseGIQtyWgtSum" >Itemwise Goods Inward-Quantity/Weight Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ItemwiseIssueQtyWgtSum" >Itemwise Issue -Quantity/Weight Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ItemwiseStock" >Itemwise Stock-Quantity</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ProcessingIssue" >Processing Issue Partywise/Itemwise Summary</DropdownItem>
                                                <DropdownItem tag={Link} to="/fetch-ProcessingReceived" >Processing Received Partywise/Itemwise Summary</DropdownItem>

                                            </DropdownMenu>
                                           
                                    </Dropdown>
                                </NavItem>

                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                                        <DropdownToggle nav caret>
                                            <span className="mr-2">Sales and Marketing</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag={Link} to="/fetch-DailyItemSalesQtyWgt" >Daily Sales Despatch Itemwise Quantity/Weight</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-MonSalesAmtBill" >Monthwise Sales Amount</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-MonSalesAmtQtyWgtBill" >Monthwise Sales Amount Quantity/Weight</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-PartySalesAmtBillentry" >PartyWise Sales Amount</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-PartySalesQtyWgtBillentry" >PartyWise Sales Quantity/Weight</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-ItemSalesQtyWgt" >ItemWise Sales Quantity/Weight</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-MonSalesAmtRateWgtBill" >Monthly Per/Kg Rate Amount/Weight</DropdownItem>


                                           
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>

                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen4} toggle={this.toggle4}>
                                        <DropdownToggle nav caret>
                                            <span className="mr-2">Accounts and Finance</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag={Link} to="/fetch-TradingExp" >Ledger Balances-Trading Expenses</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-TradingInc" >Ledger Balances-Trading Incomes</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-PLExp" >Ledger Balances-P&L Expenses</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-PLInc" >Ledger Balances-P&L Incomes</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-DebList" >Debtors List</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-CreList" >Creditors List</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-FixAssets" >Fixed Assets</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-CurAssets" >Current Assets</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-EntTran" > Entries - Transactions</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-InvBillsub" >Entries - Inventory - BillSub</DropdownItem>
                                            <DropdownItem tag={Link} to="/fetch-InvGRN" >Entries - Inventory - GRN</DropdownItem>
                                            
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>

                                <NavItem>
                                        <Link to={'/'} className="nav-link" onClick={this.logout}>Logout</Link>
                                </NavItem>



                               
                            </ul>


                        </Collapse>
                    </Container>
                </Navbar>
                <Switch>
                   
                    <Route path="/fetch-purOrdEntry">
                        <Employee />
                    </Route>
                    <Route path="/fetch-MonPurOrdAmtSum">
                        <MPOAS />
                    </Route>
                    <Route path="/fetch-MonPurOrdQtySum">
                        <MPOQS />
                    </Route>
                    <Route path="/fetch-PartyPurOrdAmtSum">
                        <Partywise />
                    </Route>
                    <Route path="/fetch-ItemPurOrdQtySum">
                        <Itemwise />
                    </Route>

                    {/* BillSub Route */}
                    <Route path="/fetch-MonPurAmtBill">
                        <MPAB />
                    </Route>
                    <Route path="/fetch-PartyPurAmtBill">
                        <PartywiseBillsub />
                    </Route>
                    <Route path="/fetch-ItemwiseBillsub"> 
                        <ItemwiseBillsub></ItemwiseBillsub>
                    </Route>


                    {/* Sales Route */}
                    <Route path="/fetch-MonSalesAmtBill">
                        <MSAB />
                    </Route>
                    <Route path="/fetch-MonSalesAmtQtyWgtBill">
                        <MSAQWB/>
                    </Route>
                    <Route path="/fetch-PartySalesAmtBillentry">
                            <PartywiseSalesBillentry/>
                    </Route>
                    <Route path="/fetch-PartySalesQtyWgtBillentry">
                        <PartywiseSalesQtyBillentry />
                    </Route>
                    <Route path="/fetch-ItemSalesQtyWgt">
                        <ItemwiseSalesQtyWgt />
                    </Route>
                    <Route path="/fetch-DailyItemSalesQtyWgt">
                        <DailyItemwiseSalesQtyWgt/>
                    </Route>
                    <Route path="/fetch-MonSalesAmtRateWgtBill">
                            <MRAWB />
                    </Route>



                    {/* Material Management Route
 */}
                    <Route path="/fetch-MonGIAmtSum">
                        <MGIAS />
                    </Route>
                    <Route path="/fetch-MonGIQtyWgtSum">
                        <MGIQWS />
                    </Route>
                    <Route path="/fetch-PartywiseGIAmtSum">
                        <PartywiseGIAS />
                    </Route>
                    <Route path="/fetch-ItemwiseGIQtyWgtSum">
                        <ItemwiseGIQWS />
                    </Route>
                    <Route path="/fetch-ItemwiseIssueQtyWgtSum">
                        <ItemwiseIssueQWS/>
                    </Route>
                    <Route path="/fetch-ProcessingIssue">
                            <Processingissue />
                    </Route>
                    <Route path="/fetch-ProcessingReceived">
                        <Processingreceived />
                    </Route>
                    <Route path="/fetch-ItemwiseStock">
                        <ItemwiseStock />
                    </Route>


                    {/* Production Module */}
                    <Route path="/fetch-MonMouldQty">
                        <MonthwiseMouldingQty />
                    </Route>
                    <Route path="/fetch-ItemwiseMouldQty">
                        <ItemwiseMouldingQty />
                    </Route>
                    <Route path="/fetch-ContracorwiseMouldQty">
                        <ContractorwiseMouldingQty />
                    </Route>
                    <Route path="/fetch-MonPourQtyWgt">
                        <MonthwisePouringQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwisePourQtyWgt">
                        <ItemwisePouringingQtyWgt />
                    </Route>
                    <Route path="/fetch-ContracorwisePourQtyWgt">
                        <ContractorwisePouringQtyWgt />
                    </Route>
                    <Route path="/fetch-MonConQtyWgt">
                        <MonthwiseConsumptionQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwiseConQtyWgt">
                        <ItemwiseConsumptionQtyWgt />
                    </Route>
                    <Route path="/fetch-ContracorwiseConQtyWgt">
                        <ContractorwiseConsumptionQtyWgt />
                    </Route>
                    <Route path="/fetch-MonProdQtyWgt">
                        <MonthwiseProductionQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwiseProdQtyWgt">
                        <ItemwiseProductionQtyWgt />
                    </Route>
                    <Route path="/fetch-ContracorwiseProdQtyWgt">
                       <ContractorwiseProductionQtyWgt />
                    </Route>
                    <Route path="/fetch-MonFREJQtyWgt">
                        <MonthwiseFirstRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwiseFREJQtyWgt">
                        <ItemwiseFirstRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-ContracorwiseFREJQtyWgt">
                        <ContractorwiseFirstRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-MonIINDRejQtyWgt">
                        <MonthwiseIINDRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwiseIINDRejQtyWgt">
                        <ItemwiseIINDRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-PartywiseIINDRejQtyWgt">
                        <PartywiseIINDRejQtyWgt />
                    </Route>
                    <Route path="/fetch-MonPartyRejQtyWgt">
                         <MonthwisePartyRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwisePartyRejQtyWgt">
                        <ItemwisePartyRejectionQtyWgt />
                    </Route>
                    <Route path="/fetch-PartywisePartyRejQtyWgt">
                        <PartywisePartyRejQtyWgt />
                    </Route>
                    <Route path="/fetch-MonPartyRejAnalysisQtyWgt">
                        <MonthwisePartyRejectionAnalysisQtyWgt />
                    </Route>
                    <Route path="/fetch-ItemwisePartyRejAnalysisQtyWgt">
                        <ItemwisePartyRejectionAnalysisQtyWgt />
                    </Route>
                    <Route path="/fetch-PartywisePartyRejAnalysisQtyWgt">
                        <PartywisePartyRejAnalysisQtyWgt />
                    </Route>

                    <Route path="/fetch-ItemwiseMouldPourQty">
                        <ItemwiseMouldingPouring />
                    </Route>
                    <Route path="/fetch-ItemwiseProdRejQty">
                        <ItemwiseProductionRejecction />
                    </Route>


                    {/* Account and Finance */}
                    <Route path="/fetch-TradingExp">
                        <Tradingexpenses />
                    </Route>
                    <Route path="/fetch-TradingInc">
                        <Tradingincomes />
                    </Route>
                    <Route path="/fetch-PLExp">
                        <PLexpenses />
                    </Route>
                    <Route path="/fetch-PLInc">
                        <PLincomes />
                    </Route>
                   <Route path="/fetch-DebList">
                        <DebList />
                    </Route>
                    <Route path="/fetch-CreList">
                        <CreList />
                    </Route>
                    <Route path="/fetch-FixAssets">
                        <FixAssets />
                    </Route>
                    <Route path="/fetch-CurAssets">
                        <CurAssets />
                    </Route>
                    <Route path="/fetch-EntTran">
                        <Entriestran />
                    </Route>
                    <Route path="/fetch-InvBillsub">
                        <InventoryBillSub />
                    </Route>
                    <Route path="/fetch-InvGRN">
                        <InventoryGRN />
                    </Route>




                </Switch>

            </header>
            </Router>
        );
    }
}
