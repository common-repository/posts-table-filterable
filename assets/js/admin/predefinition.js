'use strict';
class TABLEON_Predefinition extends TABLEON_GeneratedTables {
    constructor(table_data, table_html_id) {
        super(table_data, table_html_id);
        this.save_table_field_action = 'tableon_save_table_predefinition_field';//reinit ajax action
        this.switcher_action = 'tableon_save_table_predefinition_field';
        this.init_switchers_listener();

        document.getElementById('tableon-popup-columns-template').querySelector('.tableon-modal-inner-content').addEventListener('scroll', (e) => {
            this.add_scroll_action(document.getElementById('tabs-predefinition').querySelector('.tableon-predefinition-table-zone'));
        });
    }

    do_after_draw() {
        super.do_after_draw();
    }

}