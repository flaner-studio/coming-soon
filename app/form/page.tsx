"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  name: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  industry: string;
  businessName: string;
  dateEstablished: string;
  nameExplanation: string;
  brandStory: string;
  businessPurpose: string;
  missionStatement: string;
  brandAdjectives: string;
  productsServices: string;
  businessGoals: string;
};

const BusinessForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("YOUR_API_ENDPOINT", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Client Details</h2>

      <label>Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <label>Job Title</label>
      <input {...register("jobTitle", { required: true })} />
      {errors.jobTitle && <span>This field is required</span>}

      <label>Email Address</label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <span>Please enter a valid email</span>}

      <label>Phone Number</label>
      <input {...register("phoneNumber", { required: true })} />
      {errors.phoneNumber && <span>This field is required</span>}

      <h2>Business Details</h2>

      <label>What industry is your business part of?</label>
      <input {...register("industry", { required: true })} />
      {errors.industry && <span>This field is required</span>}

      <label>What is your business name?</label>
      <input {...register("businessName", { required: true })} />
      {errors.businessName && <span>This field is required</span>}

      <label>Date established</label>
      <input {...register("dateEstablished", { required: true })} type="date" />
      {errors.dateEstablished && <span>This field is required</span>}

      <h2>About Your Business</h2>

      <label>What is the meaning behind the name?</label>
      <textarea {...register("nameExplanation", { required: true })} />
      {errors.nameExplanation && <span>This field is required</span>}

      <label>What is your brand story?</label>
      <textarea {...register("brandStory", { required: true })} />
      {errors.brandStory && <span>This field is required</span>}

      <label>What is your business purpose?</label>
      <textarea {...register("businessPurpose", { required: true })} />
      {errors.businessPurpose && <span>This field is required</span>}

      <label>
        Try to sum up the goals + mission of your business in one sentence.
      </label>
      <textarea {...register("missionStatement", { required: true })} />
      {errors.missionStatement && <span>This field is required</span>}

      <label>What adjectives best describe your brand?</label>
      <input {...register("brandAdjectives", { required: true })} />
      {errors.brandAdjectives && <span>This field is required</span>}

      <label>
        List all the products and/or services you provide. Are there any unique
        or distinguishing features in your products/services? Which one is your
        core offering?
      </label>
      <textarea {...register("productsServices", { required: true })} />
      {errors.productsServices && <span>This field is required</span>}

      <label>
        What are a few big goals you have for your business? How do you think
        you will expand in the future?
      </label>
      <textarea {...register("businessGoals", { required: true })} />
      {errors.businessGoals && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default function BusinessFormPage() {
  return (
    <div>
      <h1>Business Information Form</h1>
      <BusinessForm />
    </div>
  );
}
