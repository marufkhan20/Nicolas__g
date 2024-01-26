import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Loading from "./Loading";

const ImportExcelModal = ({
  showImportModal,
  setShowImportModal,
  submitHandler,
  isLoading,
}) => {
  const [file, setFile] = useState(null);
  const [fileInfo, setFileInfo] = useState({});
  const [uploadLoading, setUploadLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileNameOpt, setFileNameOpt] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setUploadLoading(true);
    const selectedFile = e.target.files[0];
    setFileName(selectedFile?.name);
    setUploadLoading(false);

    // Check if a file is selected
    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    // Check if the selected file is an Excel file
    if (!selectedFile.name.endsWith(".xlsx")) {
      setError("Please upload an Excel file (.xlsx).");
      return;
    }

    // Clear any previous errors
    setError(null);

    // Set the selected file
    setFile(selectedFile);

    // Retrieve file information
    const fileInfo = {
      name: fileName,
      size: (selectedFile.size / (1024 * 1024)).toFixed(2) + "MB", // in bytes
    };
    setFileInfo(fileInfo);
  };

  // change file name
  const changeFileName = (e) => {
    if (e.code === "Enter") {
      setFileNameOpt(false);
    }
  };
  return (
    <div
      className={`transition-all duration-300 ${
        showImportModal ? "opacity-100 visible" : "opacity-0 invisible"
      } bg-gray-400/30 bg-blur fixed top-0 left-0 right-0 bottom-0 w-full min-h-screent flex items-center justify-center px-5`}
    >
      <div className="bg-white rounded-xl w-full sm:w-[500px]">
        <h2 className="font-semibold p-5 border-b">Import Excel</h2>
        <div className="p-5 flex items-center justify-center border-b flex-col gap-3">
          <label
            htmlFor="file"
            className="font-semibold bg-primary text-white py-3 px-4 rounded-md cursor-pointer hover:bg-primary/70"
          >
            Select Excel File
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            id="file"
            className="hidden"
          />
          {file && (
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-2">
                <span>Name : </span>
                {fileNameOpt ? (
                  <input
                    type="text"
                    placeholder="file name"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    onKeyUp={changeFileName}
                    className="outline-none border rounded py-1 px-2"
                  />
                ) : (
                  <>
                    <span>{fileName}</span>
                    <LuPencil
                      className="cursor-pointer"
                      onClick={() => setFileNameOpt(true)}
                    />
                  </>
                )}
              </div>
              <div>
                <span>File Size : </span>
                <span>{fileInfo?.size}</span>
              </div>
              <div>
                <span>Status : </span>
                <span className="text-green-500">Success</span>
              </div>
            </div>
          )}
          {uploadLoading && <Loading type="secondary" className="w-8 h-8" />}
          {<Error>{error}</Error>}
        </div>
        <div className="p-5 flex justify-end items-center gap-4">
          <Button
            onClick={() => setShowImportModal(false)}
            className="bg-gray-900"
          >
            Close
          </Button>
          <Button
            onClick={() => {
              submitHandler(file);
            }}
            loading={isLoading}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImportExcelModal;
