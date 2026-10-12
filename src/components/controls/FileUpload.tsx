import { useRef, useState } from "react";
import classes from "./FileUpload.module.css"
import { FileText, Upload, X } from "lucide-react";
type FileUploadProps = {
    name?: string;
    accept?: string;
    label?: string;
};

export default function FileUpload({
    name = 'attachment',
    accept = '.pdf,.doc,.docx',
    label = 'CV, ansøgning eller portfolio',
}: FileUploadProps){
    const inputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);
    
    function handleFile(selectedFile?: File) {
        if (selectedFile) {
            setFile(selectedFile);
        }
    }
    function removeFile() {
        setFile(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }
    return (<>
     <div className={classes.wrapper}>
        <label className={classes.label}>{label}</label>

        <input
            ref={inputRef}
            className={classes.input}
            type="file"
            name={name}
            accept={accept}
            onChange={(e) => handleFile(e.target.files?.[0])}
        />
        {!file ? (
            <button
                type="button"
                className={`${classes.dropzone} ${
                    dragging ? classes.dragging : ''
                }`}
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    handleFile(e.dataTransfer.files?.[0]);
                }}
            >
                <span className={classes.icon}>
                    <Upload size={22} strokeWidth={1.5} />
                </span>

                <span className={classes.title}>
                    Træk en fil hertil eller{' '}
                    <span className={classes.browse}>vælg fil</span>
                </span>

                <span className={classes.hint}>
                    PDF, DOC eller DOCX · Maks. 10 MB
                </span>
            </button>
            ) : (
                <div className={classes.selectedFile}>
                    <span className={classes.fileIcon}>
                        <FileText size={22} strokeWidth={1.5} />
                    </span>

                    <span className={classes.fileInfo}>
                        <span className={classes.fileName}>{file.name}</span>
                        <span className={classes.fileSize}>
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                    </span>

                    <button
                        type="button"
                        className={classes.remove}
                        onClick={removeFile}
                        aria-label="Fjern fil"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}
     </div>

    </>);
}