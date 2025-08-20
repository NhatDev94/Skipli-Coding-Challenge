import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import TableSkeleton from "../skeletons/TableSkeleton";
import type { EmployeeType } from "@/types/user";

type EmployeeTableProps = {
  isLoading: boolean;
  employees: EmployeeType[];
  onEdit: (phoneNumber: string) => void;
  onDelete: (phoneNumber: string) => void;
};

export default function EmployeeTable(props: EmployeeTableProps) {
  return (
    <Table className="w-full lg:table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead colSpan={1}>Id</TableHead>
          <TableHead colSpan={2}>Name</TableHead>
          <TableHead colSpan={3}>Email</TableHead>
          <TableHead colSpan={2}>Phone number</TableHead>
          <TableHead colSpan={2}>Status</TableHead>
          <TableHead colSpan={2}>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.isLoading && <TableSkeleton />}
        {!props.isLoading && props.employees?.length === 0 && (
          <TableRow>
            <TableCell colSpan={12}>
              <div className="w-full py-10 rounded-lg text-base font-semibold text-center shadow bg-gray-100 select-none">
                No employee yet
              </div>
            </TableCell>
          </TableRow>
        )}
        {!props.isLoading &&
          props.employees?.length > 0 &&
          props.employees?.map((employee, index) => (
            <TableRow key={employee.phoneNumber}>
              <TableCell colSpan={1}>{index + 1}</TableCell>
              <TableCell colSpan={2}>{employee.name}</TableCell>
              <TableCell
                colSpan={3}
                className="overflow-hidden text-ellipsis max-w-40"
              >
                {employee.email}
              </TableCell>
              <TableCell colSpan={2}>{employee.phoneNumber}</TableCell>
              <TableCell colSpan={2}>
                {employee.isActive ? "Active" : "Inactive"}
              </TableCell>
              <TableCell colSpan={2} className="">
                <Button
                  className="w-fit mr-4"
                  onClick={() => props.onEdit(employee.phoneNumber)}
                >
                  Edit
                </Button>
                <Button
                  variant={"destructive"}
                  className="w-fit m-0"
                  onClick={() => props.onDelete(employee.phoneNumber)}
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
