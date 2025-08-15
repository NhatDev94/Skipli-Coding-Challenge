import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DialogCustomProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: (open: boolean) => void;
};

export default function DialogCustom(props: DialogCustomProps) {
  return (
    <Dialog open={props.open} onOpenChange={props.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <div className="">{props.children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
