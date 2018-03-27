import test from 'ava';
import m from '.';

test(t => {
	t.deepEqual(m(['foo', 'bar', 'unicorn'], 2), ['bar', 'unicorn', 'foo']);
	t.deepEqual(m(['foo', 'bar', 'unicorn'], 1), ['unicorn', 'foo', 'bar']);
	t.deepEqual(m(['foo', 'bar', 'unicorn'], -2), ['unicorn', 'foo', 'bar']);
	t.deepEqual(m(['foo', 'bar', 'unicorn'], -1), ['bar', 'unicorn', 'foo']);
	t.deepEqual(m(['foo', 'bar', 'unicorn', 'foo'], -1), ['bar', 'unicorn', 'foo', 'foo']);
});
