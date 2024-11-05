import React from 'react'

function Upload() {
  return (
    <div>
        <div>
            <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary">
                    Upload
                </button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropend</span>
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Action two</a></li>
                <li><a class="dropdown-item" href="#">Action three</a></li>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default Upload