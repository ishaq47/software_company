// SimplyBookWidget.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SimplyBookWidget = () => {
  return (
    <Helmet key="simplyBookWidget">
      <script src="//widget.simplybook.asia/v2/widget/widget.js" type="text/javascript" />
      <script type="text/javascript">
        {`
          var widget = new SimplybookWidget({
            "widget_type": "iframe",
            "url": "https://techcreator.simplybook.asia",
            "theme": "skittish",
            "theme_settings": {
              "timeline_hide_unavailable": "1",
              "hide_past_days": "0",
              "timeline_show_end_time": "0",
              "timeline_modern_display": "as_slots",
              "sb_base_color": "#1f3f68",
              "display_item_mode": "block",
              "body_bg_color": "#f5f8ff",
              "sb_review_image": "",
              "dark_font_color": "#0f1926",
              "light_font_color": "#ffffff",
              "btn_color_1": "#385e8e",
              "sb_company_label_color": "#19375e",
              "hide_img_mode": "0",
              "sb_busy": "#c7b3b3",
              "sb_available": "#d6ebff"
            },
            "timeline": "modern",
            "datepicker": "top_calendar",
            "is_rtl": false,
            "app_config": {
              "clear_session": 0,
              "allow_switch_to_ada": 0,
              "predefined": []
            }
          });
        `}
      </script>
    </Helmet>
  );
};

export default SimplyBookWidget;
