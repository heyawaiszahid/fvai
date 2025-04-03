import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import Good from "./icons/Good";

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
          <FormItem className={`space-y-0 ${type === "textarea" ? "lg:col-span-2" : ""}`}>
            <FormLabel
              className={`transition-colors duration-300 ease-out
                ${
                  type === "radio"
                    ? "text-text-primary text-[16px] lg:text-[23px] block mb-6 lg:mb-8"
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
                  className={`px-4 py-[21px] pr-12 border bg-background-paper placeholder:text-others-backdropOverlay lg:text-[16px] focus-visible:ring-0 transition-colors duration-300 ease-out ${
                    isError
                      ? "border-error-dark"
                      : isFocusedOrValid
                      ? "border-primary-dark"
                      : "border-others-backdropOverlay"
                  }`}
                  onFocus={() => setFocusField(name)}
                  onBlur={() => setFocusField(null)}
                  id={name}
                />
              ) : type === "select" ? (
                <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl
                    className={`px-4 py-[21px] border text-[16px] bg-background-paper data-[placeholder]:text-others-backdropOverlay focus:ring-0 focus:outline-0 focus:border-primary-dark transition-colors duration-300 ease-out ${
                      isError
                        ? "border-error-dark"
                        : isFocusedOrValid
                        ? "border-primary-dark"
                        : "border-others-backdropOverlay"
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
                    className="resize-none px-4 py-3 bg-background-paper border-others-backdropOverlay placeholder:text-others-backdropOverlay lg:text-[16px] shadow-none outline-none focus-visible:ring-0 focus:border-primary-dark duration-300 ease-out"
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
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                    {options.map((option) => {
                      const isSelected = field.value === option.value;

                      return (
                        <FormItem key={option.value} className="space-y-0 flex gap-2 lg:gap-3 mb-2 lg:mb-6">
                          <FormControl>
                            <RadioGroupItem
                              value={option.value}
                              className="w-5 h-5 border-others-backdropOverlay focus-visible:ring-0 lg:hidden"
                            />
                          </FormControl>
                          <FormLabel
                            className={`text-text-secondary text-[16px] lg:text-[23px] leading-[20px] lg:leading-[32px] cursor-pointer lg:w-full lg:py-3 lg:pl-14 lg:rounded-[9px] ${
                              isSelected ? "lg:bg-text-secondary lg:text-white" : "lg:bg-white"
                            }`}
                          >
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              ) : null}
              {type === "input" && !isError && field.value && (
                <Good className="w-[16px] h-[12px] fill-current text-success-dark absolute top-1/2 right-5 transform -translate-y-1/2" />
              )}
            </div>
            <div className={`flex gap-4 ${type === "textarea" ? "items-end" : ""}`}>
              {type !== "radio" && errors?.[name]?.message && (
                <FormMessage className="text-[11px]">{errors[name]?.message}</FormMessage>
              )}
              {type === "textarea" && charCount !== null && (
                <p
                  className={`ml-auto shrink-0 text-[11px] transition-colors duration-300 ease-out ${
                    isError
                      ? "text-error-dark"
                      : focusField === name
                      ? "text-primary-dark"
                      : "text-others-backdropOverlay"
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
