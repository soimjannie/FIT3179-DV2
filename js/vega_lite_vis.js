/* ============================================================
   Live Well, Australia — chart loader
   Embeds every Vega-Lite spec with one shared visual theme.
   ============================================================ */

// Shared look-and-feel so all 14 charts read as one system.
const vlTheme = {
  background: "transparent",
  font: "Inter, system-ui, sans-serif",
  title: {
    font: "Archivo, Inter, sans-serif",
    fontSize: 17,
    fontWeight: 700,
    anchor: "start",
    color: "#1f2933",
    subtitleFont: "Inter, sans-serif",
    subtitleColor: "#697586",
    subtitleFontSize: 12.5,
    offset: 12
  },
  axis: {
    labelFont: "Inter, sans-serif",
    titleFont: "Inter, sans-serif",
    labelColor: "#52606d",
    titleColor: "#3e4c59",
    labelFontSize: 11,
    titleFontSize: 12,
    titleFontWeight: 600,
    grid: false,
    domainColor: "#cbd2d9",
    tickColor: "#cbd2d9"
  },
  legend: {
    labelFont: "Inter, sans-serif",
    titleFont: "Inter, sans-serif",
    labelColor: "#52606d",
    titleColor: "#3e4c59",
    titleFontSize: 11,
    labelFontSize: 11
  },
  view: { stroke: null }
};

// id of the <div> -> path to the Vega-Lite spec
const charts = {
  waffle_activity:        "js/waffle_activity.vg.json",
  choropleth_overweight:  "js/choropleth_overweight.vg.json",
  symbol_smoking:         "js/symbol_smoking.vg.json",
  dotmap_alcohol:         "js/dotmap_alcohol.vg.json",
  cartogram_diet:         "js/cartogram_diet.vg.json",
  heatmap_riskfactors:    "js/heatmap_riskfactors.vg.json",
  dumbbell_sex:           "js/dumbbell_sex.vg.json",
  activity_ses:           "js/activity_ses.vg.json",
  trend_smoking:          "js/trend_smoking.vg.json",
  connected_scatter:      "js/connected_scatter.vg.json",
  barchart_scorecard:     "js/barchart_scorecard.vg.json",
  symbol_sport:           "js/symbol_sport.vg.json",
  lollipop_top_sports:    "js/lollipop_top_sports.vg.json",
  ausplay_participation:  "js/ausplay_participation.vg.json"
};

const embedOpt = {
  mode: "vega-lite",
  renderer: "svg",
  actions: { export: true, source: true, compiled: false, editor: true },
  config: vlTheme
};

Object.entries(charts).forEach(([id, spec]) => {
  const el = document.getElementById(id);
  if (!el) return;
  vegaEmbed("#" + id, spec, embedOpt).catch(function (err) {
    console.error("Could not render " + id + ":", err);
    el.innerHTML = '<p style="color:#9aa5b1;font-size:.9rem;padding:14px">' +
      'Chart “' + id + '” could not load. Serve the folder over a local web ' +
      'server so the data files can be fetched.</p>';
  });
});
