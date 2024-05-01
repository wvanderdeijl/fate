import { Component, Input, HostBinding, HostListener, Optional, Self, ElementRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { defaultButtons } from '../fate-ui/fate-ui.component';
import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';
import { FateMaterialIconService } from '../fate-material-icon.service';

import { Subject } from 'rxjs';

let instanceCounter = 0;

@Component({
  selector: 'fate-material',
  templateUrl: './fate-material.component.html',
  styleUrls: ['./fate-material.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: FateMaterialComponent },
    { provide: FateIconService, useExisting: FateMaterialIconService }
  ],
})
export class FateMaterialComponent implements  ControlValueAccessor, OnDestroy, MatFormFieldControl<string>  {

  @Input()
  row: number;

  @Input()
  public buttons: Array<string> = defaultButtons;

  @Input()
  public get value(): string {
    return this.passthrough;
  }
  public set value(value: string) {
    this.stateChanges.next();
    this.passthrough = value;
    this.changed.forEach(f => f(value));
  }
  public passthrough: string;

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(placeholder) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }
  protected _placeholder: string;

  public uiId  = 'material-' + (instanceCounter++);;
  @HostBinding()
  id = `${this.uiId}`;

  @HostListener('focusout')
  public blur() {
    this.focused = false;
    this.stateChanges.next();
    if (!this.clickOngoing) {
      this.uiVisible = false;
    }
  }

  @HostListener('focusin')
  public focus() {
    this.focused = true;
    this.uiVisible = true;
    this.stateChanges.next();
  }

  @HostListener('mousedown', ['$event'])
  public mousedown (event: any) {
    this.clickOngoing = true;
  }

  @HostListener('mouseup', ['$event'])
  public mouseup (event: any) {
    this.clickOngoing = false;
  }
  public clickOngoing = false;
  public uiVisible = false;

  get empty() {
    return !this.passthrough || this.passthrough === '';
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  protected _required = false;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  protected _disabled = false;

  public errorState = false;

  public controlType = 'fate-material';

  @HostBinding('attr.aria-describedby')
  describedBy = '';

  public setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  public onContainerClick(event: MouseEvent) {}

  public stateChanges = new Subject<void>();
  public focused = false;

  protected changed = new Array<(value: string) => void>();

  constructor(controller: FateControllerService, parser: FateParserService, icon: FateIconService, el: ElementRef, @Optional() @Self() public ngControl: NgControl) {
    // Setting the value accessor directly (instead of using
    // the providers) to avoid running into a circular import.
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public onChange(value) {
    this.passthrough = value;
    this.changed.forEach(f => f(value));
    this.stateChanges.next();
  }

  public ngOnDestroy() {
    this.stateChanges.complete();
  }

  public writeValue(value: string) {
    this.passthrough = value;
    this.stateChanges.next();
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}
}
