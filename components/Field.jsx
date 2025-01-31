import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Field = ({
  control,
  name,
  placeholder,
  focusField,
  setFocusField,
  errors,
  label,
  type = "input",
  options = [],
  charCount = null,
  handleDescriptionChange = () => {},
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const isError = type !== "radio" && errors?.[name];
        const isFocusedOrValid = focusField === name || field.value;

        return (
          <FormItem
            className={`${type === "radio" ? "space-y-2 lg:space-y-3" : "space-y-0"} ${type === "textarea" ? "lg:col-span-2" : ""}`}
          >
            <FormLabel
              className={`transition-colors duration-300 ease-out
                ${
                  type === "radio"
                    ? "text-text-primary text-base lg:text-2xl block mt-5 mb-5 lg:mt-8 lg:mb-8"
                    : isError
                    ? "text-error-dark"
                    : isFocusedOrValid
                    ? "text-primary-dark"
                    : "text-others-backdropOverlay"
                }`}
              htmlFor={name}
            >
              {label}
            </FormLabel>

            <div className="relative">
              {type === "input" ? (
                <Input
                  {...field}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`px-4 py-[21px] pr-12 border placeholder:text-others-backdropOverlay lg:text-base focus-visible:ring-0 transition-colors duration-300 ease-out ${
                    isError ? "border-error-dark" : isFocusedOrValid ? "border-primary-dark" : "border-others-backdropOverlay"
                  }`}
                  onFocus={() => setFocusField(name)}
                  onBlur={() => setFocusField(null)}
                  id={name}
                />
              ) : type === "select" ? (
                <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl
                    className={`px-4 py-[21px] border text-base data-[placeholder]:text-others-backdropOverlay focus:ring-0 focus:outline-0 focus:border-primary-dark transition-colors duration-300 ease-out ${
                      isError ? "border-error-dark" : isFocusedOrValid ? "border-primary-dark" : "border-others-backdropOverlay"
                    }`}
                  >
                    <SelectTrigger onBlur={() => field.onChange(field.value)}>
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options.map((option) =>
                      typeof option === "object" ? (
                        <SelectItem key={option.code} value={option.code}>
                          {option.name}
                        </SelectItem>
                      ) : (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              ) : type === "textarea" ? (
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={placeholder}
                    autoComplete="off"
                    className="resize-none px-4 py-3 border-others-backdropOverlay placeholder:text-others-backdropOverlay lg:text-base shadow-none outline-none focus-visible:ring-0 focus:border-primary-dark duration-300 ease-out"
                    onFocus={() => setFocusField(name)}
                    onBlur={() => setFocusField(null)}
                    onChange={(e) => {
                      field.onChange(e);
                      handleDescriptionChange(e);
                    }}
                    id={name}
                  />
                </FormControl>
              ) : type === "radio" ? (
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="">
                    {options.map((option) => (
                      <FormItem key={option.value} className="space-y-0 flex gap-3 mb-2 lg:mb-6">
                        <FormControl>
                          <RadioGroupItem
                            value={option.value}
                            className="w-5 h-5 lg:w-8 lg:h-8 border-others-backdropOverlay focus-visible:ring-0"
                          />
                        </FormControl>
                        <FormLabel className="text-text-secondary text-base lg:text-2xl leading-5">{option.label}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              ) : null}
              {type === "input" && !isError && field.value && (
                <Image
                  src="/icon-good.svg"
                  alt="Valid"
                  width={17}
                  height={12}
                  className="absolute top-1/2 right-5 transform -translate-y-1/2"
                />
              )}
            </div>
            <div className={`flex gap-4 ${type === "textarea" ? "items-end" : ""}`}>
              {type !== "radio" && errors?.[name]?.message && <FormMessage className="text-xs">{errors[name]?.message}</FormMessage>}
              {type === "textarea" && charCount !== null && (
                <p
                  className={`ml-auto shrink-0 text-xs transition-colors duration-300 ease-out ${
                    isError ? "text-error-dark" : focusField === name ? "text-primary-dark" : "text-others-backdropOverlay"
                  }`}
                >
                  {charCount}/50 Characters
                </p>
              )}
            </div>
          </FormItem>
        );
      }}
    />
  );
};

export default Field;
