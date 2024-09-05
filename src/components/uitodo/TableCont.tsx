// src/Header.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditTask from "./EditTask";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteTask from "./DeleteTask";




const TableCont: React.FC = () => {
    const invoices = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
      },
    ];

  return (
    <div className="flex justify-end items-center gap-2 mt-5 mr-4 ">
      <Table>
        <TableCaption>A list of your Tasks.</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[25px] text-center">ID</TableHead>
            <TableHead className="w-[200px] text-center">Name</TableHead>
            <TableHead className="ml-55 w-[225px] text-center">
              Description
            </TableHead>
            <TableHead className="ml-55 text-center w-[150px]">
              Status
            </TableHead>
            <TableHead className="text-center w-[100px] ml-75">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>
                <Badge className="bg-green-300 text-white text-center">
                  Done
                </Badge>
              </TableCell>
              <TableCell className="text-right flex gap-8">
                <Checkbox id="terms" className="cursor-pointer " />
                <EditTask/>
                <DeleteTask/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
};

export default TableCont;





  

