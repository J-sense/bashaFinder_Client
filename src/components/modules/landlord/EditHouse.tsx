"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateHouseListing } from "@/services/landlord";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
type TData = {
  location: string;
  title: string;
  rentAmount: number;
  bedrooms: number;
};
const UpdateHouseForm = ({ id }: { id: string }) => {
  console.log(id);
  const form = useForm();
  const { formState: isSubmitting } = form;
  const onSubmit = async (data) => {
    try {
      const updataData = {
        location: data.location,
        title: data.title,
        rentAmount: data.rentAmount,
        bedrooms: data.bedrooms,
      };

      const res = await updateHouseListing(updataData, id);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto p-6 border rounded-xl shadow-lg "
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} type="text" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rentAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} type="number" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bed Rooms</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} type="number" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          variant="default"
          type="submit"
          className="w-full  py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          {isSubmitting ? "Updating" : "Update House"}
        </Button>
      </form>
    </Form>
  );
};

export default UpdateHouseForm;
