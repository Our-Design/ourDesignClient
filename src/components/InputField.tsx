type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  type?: string;
  required?: boolean;
  isTextarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required,
  isTextarea = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="bg-white p-3 rounded border border-gray-300 outline-none font-semibold"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-white p-3 rounded border border-gray-300 outline-none font-semibold"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputField;
