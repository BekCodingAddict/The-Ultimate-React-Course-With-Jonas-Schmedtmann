import { useMutation } from "@tanstack/react-query";
import { singup as singupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSingup() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: singupAPI,
    onSuccess: (user) => {
      toast.success(
        "Accaunt successfully created! Please verufy\
        the new accaunt from the user's email address"
      );
    },
  });

  return { singup, isLoading };
}
