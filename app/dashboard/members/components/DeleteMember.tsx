"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { TrashIcon } from "@radix-ui/react-icons";
import React, { useTransition } from "react";
import { deleteMemberById } from "../actions";

function DeleteMember({ user_id }: { user_id: string }) {
  const [isPending, startTransition] = useTransition();

  const onSubmit = () => {
    startTransition(async () => {
      const result = JSON.parse(await deleteMemberById(user_id));

      if (result?.error?.message) {
        toast({ title: "Failed to delete" });
      } else {
        toast({ title: "Successfully deleted" });
      }
    });
  };

  return (
    <form action={onSubmit}>
      <Button variant="outline">
        <TrashIcon />
        Delete
      </Button>
    </form>
  );
}

export default DeleteMember;
