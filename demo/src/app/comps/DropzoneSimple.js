"use client";

import Link from 'next/link';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function DropzoneSimple() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div>
    <Link href={"/example"}>Example</Link>
    <div {...getRootProps()} className='div'>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    </div>
  )
}