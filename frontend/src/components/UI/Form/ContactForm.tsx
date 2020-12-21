import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <form
        action="/contacts/#wpcf7-f796-p781-o1"
        method="post"
        className="wpcf7-form"
      >
        <input type="hidden" name="_wpcf7" value="796" />
        <input type="hidden" name="_wpcf7_version" value="5.1.9" />
        <input type="hidden" name="_wpcf7_locale" value="en_US" />
        <input
          type="hidden"
          name="_wpcf7_unit_tag"
          value="wpcf7-f796-p781-o1"
        />
        <input type="hidden" name="_wpcf7_container_post" value="781" />

        <div className="row">
          <div className="wgl_col-6">
            <span className="wpcf7-form-control-wrap text-759">
              <input
                type="text"
                name="text-759"
                value=""
                className="wpcf7-form-control wpcf7-text"
                aria-invalid="false"
                placeholder="Your Name *"
              />
            </span>
          </div>
          <div className="wgl_col-6">
            <span className="wpcf7-form-control-wrap email-613">
              <input
                type="email"
                name="email-613"
                value=""
                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email"
                aria-invalid="false"
                placeholder="Your Email *"
              />
            </span>
          </div>
          <div className="wgl_col-12">
            <span className="wpcf7-form-control-wrap textarea-876">
              <textarea
                name="textarea-876"
                className="wpcf7-form-control wpcf7-textarea"
                aria-invalid="false"
                placeholder="Message..."
              ></textarea>
            </span>
          </div>
        </div>
        <p>
          <span className="shift-3d-wrapper">
            <span className="wgl-button shift-3d">
              <input
                type="submit"
                value="Post a Comment"
                className="wpcf7-form-control wpcf7-submit"
              />
            </span>
          </span>
          <span className="ajax-loader"></span>
        </p>
        <div
          className="wpcf7-response-output wpcf7-display-none"
          aria-hidden="true"
        ></div>
      </form>
    </div>
  );
};
