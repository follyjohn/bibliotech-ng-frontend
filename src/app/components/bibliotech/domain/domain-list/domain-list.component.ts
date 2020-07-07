import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/services/domain.service';
import { Domain } from 'src/app/models/Domain.model';
@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements  OnInit, OnDestroy {

  public domains: Domain[];

  private domainSub: Subscription;
  private errorMessage: string;

  constructor(private router: Router, private domainService: DomainService) { }
  ngOnDestroy(): void {
    this.domainSub.unsubscribe();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
     console.log('test');
    });
    this.freshDomain();
  }

  onDeleteDomain(id: string) {
    this.domainService.deleteDomain(id).then(
      () => {
        // this.newDomainForm.reset();
        this.freshDomain();
        // this.router.navigate(['/dashboard/Domains']);
      }
    ).catch(
      (error) => {
        // this.errorMessage = error;
      }
    );
    // this.router.navigate(['/dashboard']);
  }

  freshDomain() {
    this.domainSub = this.domainService.domains$.subscribe(
      (domains) => {
        this.domains = domains;
      }
    );
    this.domainService.getAllDomain();
  }

  openToEditDomain(id: string) {
    this.router.navigate(['/domain/' + id]);
  }

  openToModify(id: string) {
    this.router.navigate(['/domain/' + id + '/update']);
  }

}
