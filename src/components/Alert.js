import React from "react";

export default function Alert(props) {
  return (
    props.alertMessage && (
      <>
        <div
          class={`alert alert-${props.alertMessage.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {props.alertMessage.type.charAt(0).toUpperCase() +
              props.alertMessage.type.slice(1)}
          </strong>{" "}
          : {props.alertMessage.message}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </>
    )
  );
}
