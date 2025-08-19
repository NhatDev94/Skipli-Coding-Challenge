import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

export default function TableSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <TableRow key={item}>
          <TableCell colSpan={1}>
            <Skeleton className="w-full h-10 rounded-lg" />
          </TableCell>
          <TableCell colSpan={2}>
            <Skeleton className="w-full h-10 rounded-lg" />
          </TableCell>
          <TableCell colSpan={3}>
            <Skeleton className="w-full h-10 rounded-lg" />
          </TableCell>
          <TableCell colSpan={2}>
            <Skeleton className="w-full h-10 rounded-lg" />
          </TableCell>
          <TableCell colSpan={2}>
            <Skeleton className="w-full h-10 rounded-lg" />
          </TableCell>
          <TableCell colSpan={2}>
            <Skeleton className="w-full h-10 rounded-lg" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
