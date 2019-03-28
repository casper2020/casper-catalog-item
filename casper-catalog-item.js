import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperCatalogItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
            width: calc(25% - 22px);
            margin: 10px 20px 20px 0;
            border: 1px solid #b5b5b5;
            border-radius: 2px;
            min-height: 120px;
            padding: 0;
          }

          :host(:hover) {
            background: rgba(var(--primary-color-rgb), 0.07);
            border: 1px solid var(--primary-color);
          }

          a {
            font-weight: bold;
            font-size: 16px !important;
            color: #434343;
            line-height: 19px !important;
            text-decoration: none;
            margin-bottom: 0px;
            display: block;
            padding: 10px;
            height: 100% !important;
          }

          a span {
            color: #8f8f8f;
            font-size: 11px;
            display: block;
          }

          a p {
            font-weight: normal;
            font-size: 13px;
          }
      </style>
      <div class="gridItem">
        For Johnny Branches <br>(not fully functional - to review together)
        <a href\$="http://localhost:3009/standalone?mt=[[item.data_mt]]&amp;cid=[[item.data_cid]]" checkout-href="http://localhost:3009" no-follow="" class="checkout" data-mt\$="[[item.data_mt]]" data-cid\$="[[item.data_cid]]">
          [[item.name]]
          <span> -  sub.titulo que nao ha  - </span>
          <p><img height="120" src="[[item.image]]"></p>
        </a>
      </div>
    `;
  }

  static get is() { return 'casper-catalog-item'; }
  static get properties() {
    return {
      item: Object
    };
  }
}

window.customElements.define(CasperCatalogItem.is, CasperCatalogItem);
