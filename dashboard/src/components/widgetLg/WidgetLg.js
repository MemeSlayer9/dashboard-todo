import React from 'react'
import './widgetLg.css'

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className="widgetlg"> 
            <h3 className="widgetLgTitle">Latest transaction</h3>
            <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngDvCPhMqVXGn9OgzKtRkdX30o2dxfsmbbKYA5FZihWEuy23wtgStQKvk1coniRa1eIc&usqp=CAU" alt="" className="widgetLgImg"/>
                                <span className="widgetLgName">W</span>
                            </td>
                            <td className="widgetLgDate">2 Jun 2021</td>
                            <td className="widgetLgAmount">$100</td>
                            <td className="widgetLgStatus">$100</td>
                            <Button type="Approved" />
                    </tr>
                    <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngDvCPhMqVXGn9OgzKtRkdX30o2dxfsmbbKYA5FZihWEuy23wtgStQKvk1coniRa1eIc&usqp=CAU" alt="" className="widgetLgImg"/>
                                <span className="widgetLgName">W</span>
                            </td>
                            <td className="widgetLgDate">2 Jun 2021</td>
                            <td className="widgetLgAmount">$100</td>
                            <td className="widgetLgStatus">$100</td>
                            <Button type="Declined" />
                            
                    </tr>
                    <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngDvCPhMqVXGn9OgzKtRkdX30o2dxfsmbbKYA5FZihWEuy23wtgStQKvk1coniRa1eIc&usqp=CAU" alt="" className="widgetLgImg"/>
                                <span className="widgetLgName">W</span>
                            </td>
                            <td className="widgetLgDate">2 Jun 2021</td>
                            <td className="widgetLgAmount">$100</td>
                            <td className="widgetLgStatus">$100</td>
                            <Button type="Pending" />
                    </tr>
                    <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngDvCPhMqVXGn9OgzKtRkdX30o2dxfsmbbKYA5FZihWEuy23wtgStQKvk1coniRa1eIc&usqp=CAU" alt="" className="widgetLgImg"/>
                                <span className="widgetLgName">W</span>
                            </td>
                            <td className="widgetLgDate">2 Jun 2021</td>
                            <td className="widgetLgAmount">$100</td>
                            <td className="widgetLgStatus">$100</td>
                            <Button type="Approved" />
                    </tr>
            </table>
        </div>
    )
}

export default WidgetLg
