"use strict";

(function () {
  var imgContentBlockWrapper = document.querySelectorAll('.sf-content-block img');

  var wrap = function wrap(referenceNode, wrapper) {
    referenceNode.parentNode.insertBefore(wrapper, referenceNode);
    wrapper.appendChild(referenceNode);
  };

  for (var i = 0; i < imgContentBlockWrapper.length; i++) {
    var img = imgContentBlockWrapper[i];
    var imgWrapper = document.createElement('div');
    imgWrapper.setAttribute('class', 'img-wrapper');
    var showCaption = img.getAttribute('data-sf-show-caption');

    if (showCaption !== null) {
      var caption = img.getAttribute('data-sf-caption');
      var credit = img.getAttribute('data-sf-credit');
      var captionNew = img.getAttribute('data-sf-caption-text');
      var creditNew = img.getAttribute('data-sf-credit-text');

      if (captionNew !== null) {
        caption = captionNew;
      }

      if (creditNew !== null) {
        credit = creditNew;
      }

      if (caption !== null || credit !== null) {
        //Authour and descriptions wrappers
        var captionWrapper = document.createElement('div');
        captionWrapper.setAttribute('class', 'sf-image-credit');
        imgWrapper.appendChild(captionWrapper);
        var captionWrapperContent = document.createElement('div');
        captionWrapperContent.setAttribute('class', 'sf-image-credit__content');
        captionWrapper.appendChild(captionWrapperContent);
        var captionWrapperInner = document.createElement('div');
        captionWrapperInner.setAttribute('class', 'sf-image-credit__inner');
        captionWrapperContent.appendChild(captionWrapperInner); // Labels wrapper

        var captionLabel = document.createElement('div');
        captionLabel.setAttribute('class', 'sf-image-credit__label');
        captionWrapper.appendChild(captionLabel);
        var copyright = document.createElement('span');
        copyright.setAttribute('class', 'sf-image-credit__copyright');
        copyright.innerText = '©';
        captionLabel.appendChild(copyright);
        var label = document.createElement('span');
        label.setAttribute('class', 'sf-image-credit__text');
        label.innerText = 'Credits';
        captionLabel.appendChild(label);
        var icon = document.createElement('i');
        icon.setAttribute('class', 'icon plus-icon');
        captionLabel.appendChild(icon);
      }

      if (credit !== null) {
        var authorWrapper = document.createElement('span');
        authorWrapper.innerText = credit.toString();
        captionWrapperInner.appendChild(authorWrapper);
      }

      if (caption !== null) {
        var newLine = document.createElement('br');
        captionWrapperInner.appendChild(newLine);
        var descriptionWrapper = document.createElement('span');
        descriptionWrapper.innerText = caption.toString();
        captionWrapperInner.appendChild(descriptionWrapper);
      }
    }

    wrap(img, imgWrapper);
  }
})();
/**
 *  Image caption markup
 *  Also you can find image caption markup here /Website/Views/Shared/Common/_ImageCredit.cshtml
 *
 *  <div class="sf-image-credit">
 *      <div class="sf-image-credit__content">
 *          <div class="sf-image-credit__inner">
 *              @author
 *              <br />
 *              @description
 *          </div>
 *      </div>
 *
 *      <div class="sf-image-credit__label">
 *          <span class="sf-image-credit__copyright">©</span>
 *          <span class="sf-image-credit__text">@res.ImageCreditLabel</span>
 *          <i class="icon plus-icon"></i>
 *      </div>
 *  </div>
 *
 **/
//# sourceMappingURL=content-block.min.js.map
