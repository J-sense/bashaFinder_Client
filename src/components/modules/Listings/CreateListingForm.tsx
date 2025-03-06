"use client";

import { useUser } from "@/components/context/UserContext";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createHouseListing } from "@/services/landlord";

import { Plus } from "lucide-react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

export interface FormValues {
  title: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  images: { value: string }[];
}

const CreateListingForm: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      location: "",
      description: "",
      rentAmount: 0,
      bedrooms: 0,
      images: [],
    },
  });
  const { user } = useUser();
  console.log(user);
  const { append, fields } = useFieldArray({
    control: form.control,
    name: "images",
  });

  const addImageField = () => {
    append({ value: "" });
  };

  const onSubmit = async (data: FormValues) => {
    const images = data.images.map((img) => img.value);
    const rentForm = {
      landlord: user?.userId,
      title: data.title,
      location: data.location,
      description: data.description,
      rentAmount: Number(data.rentAmount), // Convert to number
      bedrooms: Number(data.bedrooms), // Convert to number
      images,
    };
    console.log(rentForm);
    const res = await createHouseListing(rentForm);
    console.log(res);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-md ">
      <h1 className="text-2xl font-semibold mb-6">Post a Rental Listing</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            rules={{ required: "Location is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Add Images</h3>
            <Button onClick={addImageField} variant="outline" type="button">
              <Plus />
            </Button>
          </div>

          <div className="space-y-2">
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`images.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL {index + 1}</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <FormField
            control={form.control}
            name="bedrooms"
            rules={{ required: "Number of bedrooms is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rentAmount"
            rules={{ required: "Rent amount is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rent Amount</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit Listing
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateListingForm;
