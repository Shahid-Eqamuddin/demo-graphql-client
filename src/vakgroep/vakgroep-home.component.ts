import {Component, OnInit} from '@angular/core'
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


@Component ({

    selector:'vakgroep-home',
    templateUrl: './vakgroep-home.component.html'
  
})

export class VakgroepHomeComponent implements OnInit {

    vakgroepen: any[];
    loading = true;
    error: any;
  
    constructor(private apollo: Apollo) {}
      
    ngOnInit() {
      this.apollo      
        .watchQuery({
          query: gql`
            {
              vakgroepen {
                    id
                    naam 
                    omschrijving
                    homepage                                                      
                }
            }
          `,
        })
        .valueChanges.subscribe(result => {
          this.vakgroepen = result.data && result.data.vakgroepen;
          this.loading = result.loading;
          this.error = result.errors;
        });
    }

}