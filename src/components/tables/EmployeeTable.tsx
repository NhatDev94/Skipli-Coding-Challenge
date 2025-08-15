import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

type EmployeeTableProps = {
  employees: any[];
  onEdit: (employeeId: number) => void;
  onDelete: (employeeId: number) => void;
};

export default function EmployeeTable(props: EmployeeTableProps) {
  return (
    <Table className="w-full table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-14">Id</TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead className="w-60">Email</TableHead>
          <TableHead className="">Phone number</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell className="max-w-60 line-clamp-1 text-ellipsis">
              {employee.email}
            </TableCell>
            <TableCell>{employee.phone}</TableCell>
            <TableCell>{employee.status}</TableCell>
            <TableCell className="">
              <Button
                className="w-fit mr-4"
                onClick={() => props.onEdit(employee.id)}
              >
                Edit
              </Button>
              <Button
                variant={"destructive"}
                className="w-fit m-0"
                onClick={() => props.onDelete(employee.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
