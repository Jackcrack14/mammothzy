"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { activitySchema } from "./schemas";
import { ActivityFormData } from "@/hooks/use-activity-form";
import { Textarea } from "../ui/textarea";

interface ActivityDetailsProps {
  onNext: () => void;
  onSave: (data: Partial<ActivityFormData>) => void;
  initialData: ActivityFormData;
}

export function ActivityDetails({
  onNext,
  onSave,
  initialData,
}: ActivityDetailsProps) {
  const [showOther, setShowOther] = useState(false);
  const form = useForm<z.infer<typeof activitySchema>>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      title: initialData.title || "",
      category: initialData.category || "",
      description: initialData.description || "",
      type: initialData.type || undefined,
      location: initialData.location || "",
      minMembers: initialData.minMembers || undefined,
      maxMembers: initialData.maxMembers || undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof activitySchema>) => {
    onSave(data);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter activity name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Select the best category to describe your activity
              </FormLabel>
              <FormControl>
                <RadioGroup
                  {...field}
                  onValueChange={(value) => {
                    field.onChange(value);
                    setShowOther(value === "other");
                  }}
                  defaultValue={field.value}
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="adventure" />
                    <FormLabel className="font-normal">
                      Adventure & Games
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="Creative" />
                    <FormLabel className="font-normal">
                      Creative Expression
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="food" />
                    <FormLabel className="font-normal">Food & Drink</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="learning" />
                    <FormLabel className="font-normal">
                      Learning & Development
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="sports" />
                    <FormLabel className="font-normal">
                      Sports and Fitness
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="volunteering" />
                    <FormLabel className="font-normal">Volunteering</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="other" />
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {showOther && (
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Specify the category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About the Activity</FormLabel>
              <FormControl>
                <Textarea placeholder="Activity description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please select the activity type</FormLabel>
              <FormControl>
                <RadioGroup>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="indoor" />
                    <FormLabel className="font-normal">Indoor</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="outdoor" />
                    <FormLabel className="font-normal">Outdoor</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="virtual" />
                    <FormLabel className="font-normal">Virtual</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please select the type of location</FormLabel>
              <FormControl>
                <RadioGroup>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="provider" />
                    <FormLabel className="font-normal">
                      Provider Location
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="user" />
                    <FormLabel className="font-normal">User Location</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="minMembers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many members can take part in activity?
                </FormLabel>
                <FormControl>
                  <Input placeholder="Minimum" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxMembers"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Maximum</FormLabel>
                <FormControl>
                  <Input placeholder="Maximum" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save and Continue</Button>
        </div>
      </form>
    </Form>
  );
}
